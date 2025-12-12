// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDnsForwardDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#forward_mode ApsarastackDnsForwardDomain#forward_mode}
  */
  readonly forwardMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#forwarders ApsarastackDnsForwardDomain#forwarders}
  */
  readonly forwarders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#id ApsarastackDnsForwardDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#name ApsarastackDnsForwardDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#remark ApsarastackDnsForwardDomain#remark}
  */
  readonly remark?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain apsarastack_dns_forward_domain}
*/
export class ApsarastackDnsForwardDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_dns_forward_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDnsForwardDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDnsForwardDomain to import
  * @param importFromId The id of the existing ApsarastackDnsForwardDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDnsForwardDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_dns_forward_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_dns_forward_domain apsarastack_dns_forward_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDnsForwardDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDnsForwardDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_dns_forward_domain',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forwardMode = config.forwardMode;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._name = config.name;
    this._remark = config.remark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_uid - computed: true, optional: false, required: false
  public get callerUid() {
    return this.getStringAttribute('caller_uid');
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getNumberAttribute('create_timestamp');
  }

  // forward_mode - computed: false, optional: false, required: true
  private _forwardMode?: string; 
  public get forwardMode() {
    return this.getStringAttribute('forward_mode');
  }
  public set forwardMode(value: string) {
    this._forwardMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardModeInput() {
    return this._forwardMode;
  }

  // forwarders - computed: false, optional: false, required: true
  private _forwarders?: string[]; 
  public get forwarders() {
    return cdktf.Fn.tolist(this.getListAttribute('forwarders'));
  }
  public set forwarders(value: string[]) {
    this._forwarders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // update_timestamp - computed: true, optional: false, required: false
  public get updateTimestamp() {
    return this.getNumberAttribute('update_timestamp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forward_mode: cdktf.stringToTerraform(this._forwardMode),
      forwarders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forward_mode: {
        value: cdktf.stringToHclTerraform(this._forwardMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forwarders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
