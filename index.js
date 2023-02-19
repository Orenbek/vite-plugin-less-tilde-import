function createFileManager(less) {
  const { FileManager } = less;
  return class LessTildeImport extends FileManager {
    supports(filename, currentDirectory, options, environment) {
      return filename.startsWith("~");
    }

    loadFile(filename, currentDirectory, options, environment) {
      return super.loadFile(
        filename.replace("~", ""),
        currentDirectory,
        options,
        environment
      );
    }

    loadFileSync(filename, currentDirectory, options, environment) {
      return super.loadFileSync(
        filename.replace("~", ""),
        currentDirectory,
        options,
        environment
      );
    }
  };
}

module.exports = function () {
  return {
    install(less, pluginManager) {
      const LessTildeImport = createFileManager(less);
      pluginManager.addFileManager(new LessTildeImport());
    },
  };
};
