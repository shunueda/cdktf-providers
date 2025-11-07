// https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CachedImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Envbuilder option) The path to a directory where the base image can be found. This should be a read-only directory solely mounted for the purpose of caching the base image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#base_image_cache_dir CachedImage#base_image_cache_dir}
  */
  readonly baseImageCacheDir?: string;
  /**
  * (Envbuilder option) Can be specified when a DockerfilePath is specified outside the base WorkspaceFolder. This path MUST be relative to the WorkspaceFolder path into which the repo is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#build_context_path CachedImage#build_context_path}
  */
  readonly buildContextPath?: string;
  /**
  * The envbuilder image to use if the cached version is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#builder_image CachedImage#builder_image}
  */
  readonly builderImage: string;
  /**
  * (Envbuilder option) The name of the container registry to fetch the cache image from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#cache_repo CachedImage#cache_repo}
  */
  readonly cacheRepo: string;
  /**
  * (Envbuilder option) The number of days to use cached layers before expiring them. Defaults to 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#cache_ttl_days CachedImage#cache_ttl_days}
  */
  readonly cacheTtlDays?: number;
  /**
  * (Envbuilder option) The path to the folder containing the devcontainer.json file that will be used to build the workspace and can either be an absolute path or a path relative to the workspace folder. If not provided, defaults to `.devcontainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#devcontainer_dir CachedImage#devcontainer_dir}
  */
  readonly devcontainerDir?: string;
  /**
  * (Envbuilder option) The path to a devcontainer.json file that is either an absolute path or a path relative to DevcontainerDir. This can be used in cases where one wants to substitute an edited devcontainer.json file for the one that exists in the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#devcontainer_json_path CachedImage#devcontainer_json_path}
  */
  readonly devcontainerJsonPath?: string;
  /**
  * (Envbuilder option) The base64 encoded Docker config file that will be used to pull images from private container registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#docker_config_base64 CachedImage#docker_config_base64}
  */
  readonly dockerConfigBase64?: string;
  /**
  * (Envbuilder option) The relative path to the Dockerfile that will be used to build the workspace. This is an alternative to using a devcontainer that some might find simpler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#dockerfile_path CachedImage#dockerfile_path}
  */
  readonly dockerfilePath?: string;
  /**
  * (Envbuilder option) Terminates upon a build failure. This is handy when preferring the FALLBACK_IMAGE in cases where no devcontainer.json or image is provided. However, it ensures that the container stops if the build process encounters an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#exit_on_build_failure CachedImage#exit_on_build_failure}
  */
  readonly exitOnBuildFailure?: boolean | cdktf.IResolvable;
  /**
  * Extra environment variables to set for the container. This may include envbuilder options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#extra_env CachedImage#extra_env}
  */
  readonly extraEnv?: { [key: string]: string };
  /**
  * (Envbuilder option) Specifies an alternative image to use when neither an image is declared in the devcontainer.json file nor a Dockerfile is present. If there's a build failure (from a faulty Dockerfile) or a misconfiguration, this image will be the substitute. Set ExitOnBuildFailure to true to halt the container if the build faces an issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#fallback_image CachedImage#fallback_image}
  */
  readonly fallbackImage?: string;
  /**
  * (Envbuilder option) The depth to use when cloning the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_clone_depth CachedImage#git_clone_depth}
  */
  readonly gitCloneDepth?: number;
  /**
  * (Envbuilder option) Clone only a single branch of the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_clone_single_branch CachedImage#git_clone_single_branch}
  */
  readonly gitCloneSingleBranch?: boolean | cdktf.IResolvable;
  /**
  * (Envbuilder option) The URL for the HTTP proxy. This is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_http_proxy_url CachedImage#git_http_proxy_url}
  */
  readonly gitHttpProxyUrl?: string;
  /**
  * (Envbuilder option) The password to use for Git authentication. This is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_password CachedImage#git_password}
  */
  readonly gitPassword?: string;
  /**
  * (Envbuilder option) Path to an SSH private key to be used for Git authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_ssh_private_key_path CachedImage#git_ssh_private_key_path}
  */
  readonly gitSshPrivateKeyPath?: string;
  /**
  * (Envbuilder option) The URL of a Git repository containing a Devcontainer or Docker image to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_url CachedImage#git_url}
  */
  readonly gitUrl: string;
  /**
  * (Envbuilder option) The username to use for Git authentication. This is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#git_username CachedImage#git_username}
  */
  readonly gitUsername?: string;
  /**
  * (Envbuilder option) The comma separated list of paths to ignore when building the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#ignore_paths CachedImage#ignore_paths}
  */
  readonly ignorePaths?: string[];
  /**
  * (Envbuilder option) Bypass TLS verification when cloning and pulling from container registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#insecure CachedImage#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * (Envbuilder option) RemoteRepoBuildMode uses the remote repository as the source of truth when building the image. Enabling this option ignores user changes to local files and they will not be reflected in the image. This can be used to improve cache utilization when multiple users are working on the same repository. (NOTE: The Terraform provider will **always** use remote repo build mode for probing the cache repo.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#remote_repo_build_mode CachedImage#remote_repo_build_mode}
  */
  readonly remoteRepoBuildMode?: boolean | cdktf.IResolvable;
  /**
  * (Envbuilder option) The content of an SSL cert file. This is useful for self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#ssl_cert_base64 CachedImage#ssl_cert_base64}
  */
  readonly sslCertBase64?: string;
  /**
  * (Envbuilder option) Enable verbose output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#verbose CachedImage#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
  /**
  * (Envbuilder option) path to the workspace folder that will be built. This is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#workspace_folder CachedImage#workspace_folder}
  */
  readonly workspaceFolder?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image envbuilder_cached_image}
*/
export class CachedImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "envbuilder_cached_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CachedImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CachedImage to import
  * @param importFromId The id of the existing CachedImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CachedImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "envbuilder_cached_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/envbuilder/1.0.0/docs/resources/cached_image envbuilder_cached_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CachedImageConfig
  */
  public constructor(scope: Construct, id: string, config: CachedImageConfig) {
    super(scope, id, {
      terraformResourceType: 'envbuilder_cached_image',
      terraformGeneratorMetadata: {
        providerName: 'envbuilder',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseImageCacheDir = config.baseImageCacheDir;
    this._buildContextPath = config.buildContextPath;
    this._builderImage = config.builderImage;
    this._cacheRepo = config.cacheRepo;
    this._cacheTtlDays = config.cacheTtlDays;
    this._devcontainerDir = config.devcontainerDir;
    this._devcontainerJsonPath = config.devcontainerJsonPath;
    this._dockerConfigBase64 = config.dockerConfigBase64;
    this._dockerfilePath = config.dockerfilePath;
    this._exitOnBuildFailure = config.exitOnBuildFailure;
    this._extraEnv = config.extraEnv;
    this._fallbackImage = config.fallbackImage;
    this._gitCloneDepth = config.gitCloneDepth;
    this._gitCloneSingleBranch = config.gitCloneSingleBranch;
    this._gitHttpProxyUrl = config.gitHttpProxyUrl;
    this._gitPassword = config.gitPassword;
    this._gitSshPrivateKeyPath = config.gitSshPrivateKeyPath;
    this._gitUrl = config.gitUrl;
    this._gitUsername = config.gitUsername;
    this._ignorePaths = config.ignorePaths;
    this._insecure = config.insecure;
    this._remoteRepoBuildMode = config.remoteRepoBuildMode;
    this._sslCertBase64 = config.sslCertBase64;
    this._verbose = config.verbose;
    this._workspaceFolder = config.workspaceFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_image_cache_dir - computed: false, optional: true, required: false
  private _baseImageCacheDir?: string; 
  public get baseImageCacheDir() {
    return this.getStringAttribute('base_image_cache_dir');
  }
  public set baseImageCacheDir(value: string) {
    this._baseImageCacheDir = value;
  }
  public resetBaseImageCacheDir() {
    this._baseImageCacheDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageCacheDirInput() {
    return this._baseImageCacheDir;
  }

  // build_context_path - computed: false, optional: true, required: false
  private _buildContextPath?: string; 
  public get buildContextPath() {
    return this.getStringAttribute('build_context_path');
  }
  public set buildContextPath(value: string) {
    this._buildContextPath = value;
  }
  public resetBuildContextPath() {
    this._buildContextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildContextPathInput() {
    return this._buildContextPath;
  }

  // builder_image - computed: false, optional: false, required: true
  private _builderImage?: string; 
  public get builderImage() {
    return this.getStringAttribute('builder_image');
  }
  public set builderImage(value: string) {
    this._builderImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get builderImageInput() {
    return this._builderImage;
  }

  // cache_repo - computed: false, optional: false, required: true
  private _cacheRepo?: string; 
  public get cacheRepo() {
    return this.getStringAttribute('cache_repo');
  }
  public set cacheRepo(value: string) {
    this._cacheRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRepoInput() {
    return this._cacheRepo;
  }

  // cache_ttl_days - computed: false, optional: true, required: false
  private _cacheTtlDays?: number; 
  public get cacheTtlDays() {
    return this.getNumberAttribute('cache_ttl_days');
  }
  public set cacheTtlDays(value: number) {
    this._cacheTtlDays = value;
  }
  public resetCacheTtlDays() {
    this._cacheTtlDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlDaysInput() {
    return this._cacheTtlDays;
  }

  // devcontainer_dir - computed: false, optional: true, required: false
  private _devcontainerDir?: string; 
  public get devcontainerDir() {
    return this.getStringAttribute('devcontainer_dir');
  }
  public set devcontainerDir(value: string) {
    this._devcontainerDir = value;
  }
  public resetDevcontainerDir() {
    this._devcontainerDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devcontainerDirInput() {
    return this._devcontainerDir;
  }

  // devcontainer_json_path - computed: false, optional: true, required: false
  private _devcontainerJsonPath?: string; 
  public get devcontainerJsonPath() {
    return this.getStringAttribute('devcontainer_json_path');
  }
  public set devcontainerJsonPath(value: string) {
    this._devcontainerJsonPath = value;
  }
  public resetDevcontainerJsonPath() {
    this._devcontainerJsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devcontainerJsonPathInput() {
    return this._devcontainerJsonPath;
  }

  // docker_config_base64 - computed: false, optional: true, required: false
  private _dockerConfigBase64?: string; 
  public get dockerConfigBase64() {
    return this.getStringAttribute('docker_config_base64');
  }
  public set dockerConfigBase64(value: string) {
    this._dockerConfigBase64 = value;
  }
  public resetDockerConfigBase64() {
    this._dockerConfigBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigBase64Input() {
    return this._dockerConfigBase64;
  }

  // dockerfile_path - computed: false, optional: true, required: false
  private _dockerfilePath?: string; 
  public get dockerfilePath() {
    return this.getStringAttribute('dockerfile_path');
  }
  public set dockerfilePath(value: string) {
    this._dockerfilePath = value;
  }
  public resetDockerfilePath() {
    this._dockerfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfilePathInput() {
    return this._dockerfilePath;
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getListAttribute('env');
  }

  // env_map - computed: true, optional: false, required: false
  private _envMap = new cdktf.StringMap(this, "env_map");
  public get envMap() {
    return this._envMap;
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // exit_on_build_failure - computed: false, optional: true, required: false
  private _exitOnBuildFailure?: boolean | cdktf.IResolvable; 
  public get exitOnBuildFailure() {
    return this.getBooleanAttribute('exit_on_build_failure');
  }
  public set exitOnBuildFailure(value: boolean | cdktf.IResolvable) {
    this._exitOnBuildFailure = value;
  }
  public resetExitOnBuildFailure() {
    this._exitOnBuildFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitOnBuildFailureInput() {
    return this._exitOnBuildFailure;
  }

  // extra_env - computed: false, optional: true, required: false
  private _extraEnv?: { [key: string]: string }; 
  public get extraEnv() {
    return this.getStringMapAttribute('extra_env');
  }
  public set extraEnv(value: { [key: string]: string }) {
    this._extraEnv = value;
  }
  public resetExtraEnv() {
    this._extraEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvInput() {
    return this._extraEnv;
  }

  // fallback_image - computed: false, optional: true, required: false
  private _fallbackImage?: string; 
  public get fallbackImage() {
    return this.getStringAttribute('fallback_image');
  }
  public set fallbackImage(value: string) {
    this._fallbackImage = value;
  }
  public resetFallbackImage() {
    this._fallbackImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackImageInput() {
    return this._fallbackImage;
  }

  // git_clone_depth - computed: false, optional: true, required: false
  private _gitCloneDepth?: number; 
  public get gitCloneDepth() {
    return this.getNumberAttribute('git_clone_depth');
  }
  public set gitCloneDepth(value: number) {
    this._gitCloneDepth = value;
  }
  public resetGitCloneDepth() {
    this._gitCloneDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneDepthInput() {
    return this._gitCloneDepth;
  }

  // git_clone_single_branch - computed: false, optional: true, required: false
  private _gitCloneSingleBranch?: boolean | cdktf.IResolvable; 
  public get gitCloneSingleBranch() {
    return this.getBooleanAttribute('git_clone_single_branch');
  }
  public set gitCloneSingleBranch(value: boolean | cdktf.IResolvable) {
    this._gitCloneSingleBranch = value;
  }
  public resetGitCloneSingleBranch() {
    this._gitCloneSingleBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCloneSingleBranchInput() {
    return this._gitCloneSingleBranch;
  }

  // git_http_proxy_url - computed: false, optional: true, required: false
  private _gitHttpProxyUrl?: string; 
  public get gitHttpProxyUrl() {
    return this.getStringAttribute('git_http_proxy_url');
  }
  public set gitHttpProxyUrl(value: string) {
    this._gitHttpProxyUrl = value;
  }
  public resetGitHttpProxyUrl() {
    this._gitHttpProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitHttpProxyUrlInput() {
    return this._gitHttpProxyUrl;
  }

  // git_password - computed: false, optional: true, required: false
  private _gitPassword?: string; 
  public get gitPassword() {
    return this.getStringAttribute('git_password');
  }
  public set gitPassword(value: string) {
    this._gitPassword = value;
  }
  public resetGitPassword() {
    this._gitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitPasswordInput() {
    return this._gitPassword;
  }

  // git_ssh_private_key_path - computed: false, optional: true, required: false
  private _gitSshPrivateKeyPath?: string; 
  public get gitSshPrivateKeyPath() {
    return this.getStringAttribute('git_ssh_private_key_path');
  }
  public set gitSshPrivateKeyPath(value: string) {
    this._gitSshPrivateKeyPath = value;
  }
  public resetGitSshPrivateKeyPath() {
    this._gitSshPrivateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSshPrivateKeyPathInput() {
    return this._gitSshPrivateKeyPath;
  }

  // git_url - computed: false, optional: false, required: true
  private _gitUrl?: string; 
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }
  public set gitUrl(value: string) {
    this._gitUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl;
  }

  // git_username - computed: false, optional: true, required: false
  private _gitUsername?: string; 
  public get gitUsername() {
    return this.getStringAttribute('git_username');
  }
  public set gitUsername(value: string) {
    this._gitUsername = value;
  }
  public resetGitUsername() {
    this._gitUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUsernameInput() {
    return this._gitUsername;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_paths - computed: false, optional: true, required: false
  private _ignorePaths?: string[]; 
  public get ignorePaths() {
    return this.getListAttribute('ignore_paths');
  }
  public set ignorePaths(value: string[]) {
    this._ignorePaths = value;
  }
  public resetIgnorePaths() {
    this._ignorePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePathsInput() {
    return this._ignorePaths;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // remote_repo_build_mode - computed: false, optional: true, required: false
  private _remoteRepoBuildMode?: boolean | cdktf.IResolvable; 
  public get remoteRepoBuildMode() {
    return this.getBooleanAttribute('remote_repo_build_mode');
  }
  public set remoteRepoBuildMode(value: boolean | cdktf.IResolvable) {
    this._remoteRepoBuildMode = value;
  }
  public resetRemoteRepoBuildMode() {
    this._remoteRepoBuildMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRepoBuildModeInput() {
    return this._remoteRepoBuildMode;
  }

  // ssl_cert_base64 - computed: false, optional: true, required: false
  private _sslCertBase64?: string; 
  public get sslCertBase64() {
    return this.getStringAttribute('ssl_cert_base64');
  }
  public set sslCertBase64(value: string) {
    this._sslCertBase64 = value;
  }
  public resetSslCertBase64() {
    this._sslCertBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertBase64Input() {
    return this._sslCertBase64;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // workspace_folder - computed: false, optional: true, required: false
  private _workspaceFolder?: string; 
  public get workspaceFolder() {
    return this.getStringAttribute('workspace_folder');
  }
  public set workspaceFolder(value: string) {
    this._workspaceFolder = value;
  }
  public resetWorkspaceFolder() {
    this._workspaceFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceFolderInput() {
    return this._workspaceFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_image_cache_dir: cdktf.stringToTerraform(this._baseImageCacheDir),
      build_context_path: cdktf.stringToTerraform(this._buildContextPath),
      builder_image: cdktf.stringToTerraform(this._builderImage),
      cache_repo: cdktf.stringToTerraform(this._cacheRepo),
      cache_ttl_days: cdktf.numberToTerraform(this._cacheTtlDays),
      devcontainer_dir: cdktf.stringToTerraform(this._devcontainerDir),
      devcontainer_json_path: cdktf.stringToTerraform(this._devcontainerJsonPath),
      docker_config_base64: cdktf.stringToTerraform(this._dockerConfigBase64),
      dockerfile_path: cdktf.stringToTerraform(this._dockerfilePath),
      exit_on_build_failure: cdktf.booleanToTerraform(this._exitOnBuildFailure),
      extra_env: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraEnv),
      fallback_image: cdktf.stringToTerraform(this._fallbackImage),
      git_clone_depth: cdktf.numberToTerraform(this._gitCloneDepth),
      git_clone_single_branch: cdktf.booleanToTerraform(this._gitCloneSingleBranch),
      git_http_proxy_url: cdktf.stringToTerraform(this._gitHttpProxyUrl),
      git_password: cdktf.stringToTerraform(this._gitPassword),
      git_ssh_private_key_path: cdktf.stringToTerraform(this._gitSshPrivateKeyPath),
      git_url: cdktf.stringToTerraform(this._gitUrl),
      git_username: cdktf.stringToTerraform(this._gitUsername),
      ignore_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignorePaths),
      insecure: cdktf.booleanToTerraform(this._insecure),
      remote_repo_build_mode: cdktf.booleanToTerraform(this._remoteRepoBuildMode),
      ssl_cert_base64: cdktf.stringToTerraform(this._sslCertBase64),
      verbose: cdktf.booleanToTerraform(this._verbose),
      workspace_folder: cdktf.stringToTerraform(this._workspaceFolder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_image_cache_dir: {
        value: cdktf.stringToHclTerraform(this._baseImageCacheDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_context_path: {
        value: cdktf.stringToHclTerraform(this._buildContextPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      builder_image: {
        value: cdktf.stringToHclTerraform(this._builderImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_repo: {
        value: cdktf.stringToHclTerraform(this._cacheRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_ttl_days: {
        value: cdktf.numberToHclTerraform(this._cacheTtlDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      devcontainer_dir: {
        value: cdktf.stringToHclTerraform(this._devcontainerDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devcontainer_json_path: {
        value: cdktf.stringToHclTerraform(this._devcontainerJsonPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_config_base64: {
        value: cdktf.stringToHclTerraform(this._dockerConfigBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dockerfile_path: {
        value: cdktf.stringToHclTerraform(this._dockerfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exit_on_build_failure: {
        value: cdktf.booleanToHclTerraform(this._exitOnBuildFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraEnv),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fallback_image: {
        value: cdktf.stringToHclTerraform(this._fallbackImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_clone_depth: {
        value: cdktf.numberToHclTerraform(this._gitCloneDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      git_clone_single_branch: {
        value: cdktf.booleanToHclTerraform(this._gitCloneSingleBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_http_proxy_url: {
        value: cdktf.stringToHclTerraform(this._gitHttpProxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_password: {
        value: cdktf.stringToHclTerraform(this._gitPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_ssh_private_key_path: {
        value: cdktf.stringToHclTerraform(this._gitSshPrivateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_url: {
        value: cdktf.stringToHclTerraform(this._gitUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_username: {
        value: cdktf.stringToHclTerraform(this._gitUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignorePaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_repo_build_mode: {
        value: cdktf.booleanToHclTerraform(this._remoteRepoBuildMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_cert_base64: {
        value: cdktf.stringToHclTerraform(this._sslCertBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verbose: {
        value: cdktf.booleanToHclTerraform(this._verbose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_folder: {
        value: cdktf.stringToHclTerraform(this._workspaceFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
