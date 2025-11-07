// https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuildConfig extends cdktf.TerraformMetaArguments {
  /**
  * base image to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#base_image Build#base_image}
  */
  readonly baseImage?: string;
  /**
  * Extra environment variables to pass to the go build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#env Build#env}
  */
  readonly env?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#id Build#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * import path to build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#importpath Build#importpath}
  */
  readonly importpath: string;
  /**
  * Extra ldflags to pass to the go build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#ldflags Build#ldflags}
  */
  readonly ldflags?: string[];
  /**
  * Which platform to use when pulling a multi-platform base. Format: all | <os>[/<arch>[/<variant>]][,platform]*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#platforms Build#platforms}
  */
  readonly platforms?: string[];
  /**
  * Container repository to publish images to. If set, this overrides the provider's `repo`, and the image name will be exactly the specified `repo`, without the importpath appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#repo Build#repo}
  */
  readonly repo?: string;
  /**
  * The SBOM media type to use (none will disable SBOM synthesis and upload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#sbom Build#sbom}
  */
  readonly sbom?: string;
  /**
  * Which tags to use for the produced image instead of the default 'latest' tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#tags Build#tags}
  */
  readonly tags?: string[];
  /**
  * working directory for the build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#working_dir Build#working_dir}
  */
  readonly workingDir?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build ko_build}
*/
export class Build extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ko_build";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Build resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Build to import
  * @param importFromId The id of the existing Build that should be imported. Refer to the {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Build to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ko_build", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ko-build/ko/0.0.17/docs/resources/build ko_build} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuildConfig
  */
  public constructor(scope: Construct, id: string, config: BuildConfig) {
    super(scope, id, {
      terraformResourceType: 'ko_build',
      terraformGeneratorMetadata: {
        providerName: 'ko',
        providerVersion: '0.0.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseImage = config.baseImage;
    this._env = config.env;
    this._id = config.id;
    this._importpath = config.importpath;
    this._ldflags = config.ldflags;
    this._platforms = config.platforms;
    this._repo = config.repo;
    this._sbom = config.sbom;
    this._tags = config.tags;
    this._workingDir = config.workingDir;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // importpath - computed: false, optional: false, required: true
  private _importpath?: string; 
  public get importpath() {
    return this.getStringAttribute('importpath');
  }
  public set importpath(value: string) {
    this._importpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importpathInput() {
    return this._importpath;
  }

  // ldflags - computed: false, optional: true, required: false
  private _ldflags?: string[]; 
  public get ldflags() {
    return this.getListAttribute('ldflags');
  }
  public set ldflags(value: string[]) {
    this._ldflags = value;
  }
  public resetLdflags() {
    this._ldflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldflagsInput() {
    return this._ldflags;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return this.getListAttribute('platforms');
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // sbom - computed: false, optional: true, required: false
  private _sbom?: string; 
  public get sbom() {
    return this.getStringAttribute('sbom');
  }
  public set sbom(value: string) {
    this._sbom = value;
  }
  public resetSbom() {
    this._sbom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbomInput() {
    return this._sbom;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_image: cdktf.stringToTerraform(this._baseImage),
      env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._env),
      id: cdktf.stringToTerraform(this._id),
      importpath: cdktf.stringToTerraform(this._importpath),
      ldflags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ldflags),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      repo: cdktf.stringToTerraform(this._repo),
      sbom: cdktf.stringToTerraform(this._sbom),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      working_dir: cdktf.stringToTerraform(this._workingDir),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._env),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      importpath: {
        value: cdktf.stringToHclTerraform(this._importpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldflags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ldflags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbom: {
        value: cdktf.stringToHclTerraform(this._sbom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      working_dir: {
        value: cdktf.stringToHclTerraform(this._workingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
