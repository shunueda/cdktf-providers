// https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AliyunProviderConfig {
  /**
  * The aliyun sdk ak
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs#ak AliyunProvider#ak}
  */
  readonly ak?: string;
  /**
  * The aliyun sdk region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs#region AliyunProvider#region}
  */
  readonly region?: string;
  /**
  * The aliyun sdk sk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs#sk AliyunProvider#sk}
  */
  readonly sk?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs#alias AliyunProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs aliyun}
*/
export class AliyunProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aliyun";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AliyunProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AliyunProvider to import
  * @param importFromId The id of the existing AliyunProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AliyunProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aliyun", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs aliyun} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AliyunProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AliyunProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aliyun',
      terraformGeneratorMetadata: {
        providerName: 'aliyun',
        providerVersion: '0.0.6',
        providerVersionConstraint: '0.0.6'
      },
      terraformProviderSource: 'shencan/aliyun'
    });
    this._ak = config.ak;
    this._region = config.region;
    this._sk = config.sk;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ak - computed: false, optional: true, required: false
  private _ak?: string; 
  public get ak() {
    return this._ak;
  }
  public set ak(value: string | undefined) {
    this._ak = value;
  }
  public resetAk() {
    this._ak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akInput() {
    return this._ak;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sk - computed: false, optional: true, required: false
  private _sk?: string; 
  public get sk() {
    return this._sk;
  }
  public set sk(value: string | undefined) {
    this._sk = value;
  }
  public resetSk() {
    this._sk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skInput() {
    return this._sk;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ak: cdktf.stringToTerraform(this._ak),
      region: cdktf.stringToTerraform(this._region),
      sk: cdktf.stringToTerraform(this._sk),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ak: {
        value: cdktf.stringToHclTerraform(this._ak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sk: {
        value: cdktf.stringToHclTerraform(this._sk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
