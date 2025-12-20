// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosSchedulingDomainUserNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * user cname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name#domain_name AntiddosSchedulingDomainUserName#domain_name}
  */
  readonly domainName: string;
  /**
  * domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name#domain_user_name AntiddosSchedulingDomainUserName#domain_user_name}
  */
  readonly domainUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name#id AntiddosSchedulingDomainUserName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name tencentcloud_antiddos_scheduling_domain_user_name}
*/
export class AntiddosSchedulingDomainUserName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_scheduling_domain_user_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosSchedulingDomainUserName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosSchedulingDomainUserName to import
  * @param importFromId The id of the existing AntiddosSchedulingDomainUserName that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosSchedulingDomainUserName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_scheduling_domain_user_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/antiddos_scheduling_domain_user_name tencentcloud_antiddos_scheduling_domain_user_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosSchedulingDomainUserNameConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosSchedulingDomainUserNameConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_scheduling_domain_user_name',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._domainUserName = config.domainUserName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_user_name - computed: false, optional: false, required: true
  private _domainUserName?: string; 
  public get domainUserName() {
    return this.getStringAttribute('domain_user_name');
  }
  public set domainUserName(value: string) {
    this._domainUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUserNameInput() {
    return this._domainUserName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_user_name: cdktf.stringToTerraform(this._domainUserName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_user_name: {
        value: cdktf.stringToHclTerraform(this._domainUserName),
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
