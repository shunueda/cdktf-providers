// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubdomainValidateTxtValueOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The subdomain to add Zone domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation#domain_zone SubdomainValidateTxtValueOperation#domain_zone}
  */
  readonly domainZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation#id SubdomainValidateTxtValueOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation tencentcloud_subdomain_validate_txt_value_operation}
*/
export class SubdomainValidateTxtValueOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_subdomain_validate_txt_value_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubdomainValidateTxtValueOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubdomainValidateTxtValueOperation to import
  * @param importFromId The id of the existing SubdomainValidateTxtValueOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubdomainValidateTxtValueOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_subdomain_validate_txt_value_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/subdomain_validate_txt_value_operation tencentcloud_subdomain_validate_txt_value_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubdomainValidateTxtValueOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SubdomainValidateTxtValueOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_subdomain_validate_txt_value_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainZone = config.domainZone;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_zone - computed: false, optional: false, required: true
  private _domainZone?: string; 
  public get domainZone() {
    return this.getStringAttribute('domain_zone');
  }
  public set domainZone(value: string) {
    this._domainZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainZoneInput() {
    return this._domainZone;
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

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_zone: cdktf.stringToTerraform(this._domainZone),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_zone: {
        value: cdktf.stringToHclTerraform(this._domainZone),
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
