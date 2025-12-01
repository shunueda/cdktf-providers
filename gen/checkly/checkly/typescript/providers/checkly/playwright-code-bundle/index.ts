// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaywrightCodeBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle#id PlaywrightCodeBundle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * prebuilt_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle#prebuilt_archive PlaywrightCodeBundle#prebuilt_archive}
  */
  readonly prebuiltArchive: PlaywrightCodeBundlePrebuiltArchive;
}
export interface PlaywrightCodeBundlePrebuiltArchive {
  /**
  * Path to the archive file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle#file PlaywrightCodeBundle#file}
  */
  readonly file: string;
}

export function playwrightCodeBundlePrebuiltArchiveToTerraform(struct?: PlaywrightCodeBundlePrebuiltArchiveOutputReference | PlaywrightCodeBundlePrebuiltArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function playwrightCodeBundlePrebuiltArchiveToHclTerraform(struct?: PlaywrightCodeBundlePrebuiltArchiveOutputReference | PlaywrightCodeBundlePrebuiltArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaywrightCodeBundlePrebuiltArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlaywrightCodeBundlePrebuiltArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaywrightCodeBundlePrebuiltArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file = value.file;
    }
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle checkly_playwright_code_bundle}
*/
export class PlaywrightCodeBundle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_playwright_code_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlaywrightCodeBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlaywrightCodeBundle to import
  * @param importFromId The id of the existing PlaywrightCodeBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlaywrightCodeBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_playwright_code_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/playwright_code_bundle checkly_playwright_code_bundle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlaywrightCodeBundleConfig
  */
  public constructor(scope: Construct, id: string, config: PlaywrightCodeBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_playwright_code_bundle',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._prebuiltArchive.internalValue = config.prebuiltArchive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // prebuilt_archive - computed: false, optional: false, required: true
  private _prebuiltArchive = new PlaywrightCodeBundlePrebuiltArchiveOutputReference(this, "prebuilt_archive");
  public get prebuiltArchive() {
    return this._prebuiltArchive;
  }
  public putPrebuiltArchive(value: PlaywrightCodeBundlePrebuiltArchive) {
    this._prebuiltArchive.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prebuiltArchiveInput() {
    return this._prebuiltArchive.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prebuilt_archive: playwrightCodeBundlePrebuiltArchiveToTerraform(this._prebuiltArchive.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prebuilt_archive: {
        value: playwrightCodeBundlePrebuiltArchiveToHclTerraform(this._prebuiltArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlaywrightCodeBundlePrebuiltArchiveList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
