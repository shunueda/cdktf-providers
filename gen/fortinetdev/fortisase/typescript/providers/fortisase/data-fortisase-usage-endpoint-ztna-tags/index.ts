// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseUsageEndpointZtnaTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags#ftntcount DataFortisaseUsageEndpointZtnaTags#ftntcount}
  */
  readonly ftntcount?: number;
  /**
  * The primary key of the object. Can be found in the response from the get request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags#primary_key DataFortisaseUsageEndpointZtnaTags#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags#type DataFortisaseUsageEndpointZtnaTags#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags fortisase_usage_endpoint_ztna_tags}
*/
export class DataFortisaseUsageEndpointZtnaTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_usage_endpoint_ztna_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseUsageEndpointZtnaTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseUsageEndpointZtnaTags to import
  * @param importFromId The id of the existing DataFortisaseUsageEndpointZtnaTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseUsageEndpointZtnaTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_usage_endpoint_ztna_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/usage_endpoint_ztna_tags fortisase_usage_endpoint_ztna_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseUsageEndpointZtnaTagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseUsageEndpointZtnaTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_usage_endpoint_ztna_tags',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
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
    this._ftntcount = config.ftntcount;
    this._primaryKey = config.primaryKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ftntcount - computed: true, optional: true, required: false
  private _ftntcount?: number; 
  public get ftntcount() {
    return this.getNumberAttribute('ftntcount');
  }
  public set ftntcount(value: number) {
    this._ftntcount = value;
  }
  public resetFtntcount() {
    this._ftntcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftntcountInput() {
    return this._ftntcount;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ftntcount: cdktf.numberToTerraform(this._ftntcount),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ftntcount: {
        value: cdktf.numberToHclTerraform(this._ftntcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
