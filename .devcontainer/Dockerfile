# Use the official image as a parent image.
FROM mcr.microsoft.com/dotnet/sdk:8.0

RUN apt-get install -y curl git && \
  git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0 && \
  echo '. "$HOME/.asdf/asdf.sh"' >> ~/.bashrc && \
  echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.bashrc && \
  source ~/.bashrc && \
  asdf plugin add nodejs && \
  asdf install nodejs 20.15.0