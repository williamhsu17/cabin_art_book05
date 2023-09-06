import os

def convert_encoding(input_path, from_encoding, to_encoding='utf8'):
    with open(input_path, 'r', encoding=from_encoding) as f:
        content = f.read()
    
    with open(input_path, 'w', encoding=to_encoding) as f:
        f.write(content)

def main(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.htm'):
                file_path = os.path.join(root, file)
                try:
                    convert_encoding(file_path, 'big5', 'utf8')
                    print(f"Converted {file_path} to UTF-8.")
                except UnicodeDecodeError:
                    print(f"Error converting {file_path}. It might not be in big5 encoding.")
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    folder_path = input("Enter the path to the folder: ")
    main(folder_path)
