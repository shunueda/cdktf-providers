// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesAttributeAutoActivateStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status#apm_domain_id DataOciApmTracesAttributeAutoActivateStatus#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status#data_key_type DataOciApmTracesAttributeAutoActivateStatus#data_key_type}
  */
  readonly dataKeyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status#id DataOciApmTracesAttributeAutoActivateStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status oci_apm_traces_attribute_auto_activate_status}
*/
export class DataOciApmTracesAttributeAutoActivateStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_attribute_auto_activate_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApmTracesAttributeAutoActivateStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApmTracesAttributeAutoActivateStatus to import
  * @param importFromId The id of the existing DataOciApmTracesAttributeAutoActivateStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApmTracesAttributeAutoActivateStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apm_traces_attribute_auto_activate_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apm_traces_attribute_auto_activate_status oci_apm_traces_attribute_auto_activate_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesAttributeAutoActivateStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesAttributeAutoActivateStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_attribute_auto_activate_status',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apmDomainId = config.apmDomainId;
    this._dataKeyType = config.dataKeyType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
  }

  // data_key - computed: true, optional: false, required: false
  public get dataKey() {
    return this.getStringAttribute('data_key');
  }

  // data_key_type - computed: false, optional: false, required: true
  private _dataKeyType?: string; 
  public get dataKeyType() {
    return this.getStringAttribute('data_key_type');
  }
  public set dataKeyType(value: string) {
    this._dataKeyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataKeyTypeInput() {
    return this._dataKeyType;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      data_key_type: cdktf.stringToTerraform(this._dataKeyType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apm_domain_id: {
        value: cdktf.stringToHclTerraform(this._apmDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_key_type: {
        value: cdktf.stringToHclTerraform(this._dataKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
