// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilevantagePolicyPrecedenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The enforcement type for this resource. `strict` requires all non-default filevantage policy ids for platform to be provided. `dynamic` will ensure the provided policies have precedence over others. When using dynamic, policy ids not included in `ids` will retain their current ordering after the managed ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence#enforcement FilevantagePolicyPrecedence#enforcement}
  */
  readonly enforcement: string;
  /**
  * The policy ids in order. The first ID specified will have the highest precedence and the last ID specified will have the lowest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence#ids FilevantagePolicyPrecedence#ids}
  */
  readonly ids: string[];
  /**
  * That platform of the filevantage policies. (Windows, Mac, Linux)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence#platform_name FilevantagePolicyPrecedence#platform_name}
  */
  readonly platformName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence crowdstrike_filevantage_policy_precedence}
*/
export class FilevantagePolicyPrecedence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_filevantage_policy_precedence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilevantagePolicyPrecedence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilevantagePolicyPrecedence to import
  * @param importFromId The id of the existing FilevantagePolicyPrecedence that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilevantagePolicyPrecedence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_filevantage_policy_precedence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/filevantage_policy_precedence crowdstrike_filevantage_policy_precedence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilevantagePolicyPrecedenceConfig
  */
  public constructor(scope: Construct, id: string, config: FilevantagePolicyPrecedenceConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_filevantage_policy_precedence',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enforcement = config.enforcement;
    this._ids = config.ids;
    this._platformName = config.platformName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enforcement - computed: false, optional: false, required: true
  private _enforcement?: string; 
  public get enforcement() {
    return this.getStringAttribute('enforcement');
  }
  public set enforcement(value: string) {
    this._enforcement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementInput() {
    return this._enforcement;
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // platform_name - computed: false, optional: false, required: true
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enforcement: cdktf.stringToTerraform(this._enforcement),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      platform_name: cdktf.stringToTerraform(this._platformName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enforcement: {
        value: cdktf.stringToHclTerraform(this._enforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
