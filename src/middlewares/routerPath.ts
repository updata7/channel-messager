/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 08:20:54 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 09:41:46
 */


class RouterPath {
    directories: Array<string>;
    excludePaths: Array<string>;
    constructor(directories: Array<string>, excludePaths: Array<string>){
        this.directories = directories;
        this.excludePaths = excludePaths;
    }
}

export { RouterPath }