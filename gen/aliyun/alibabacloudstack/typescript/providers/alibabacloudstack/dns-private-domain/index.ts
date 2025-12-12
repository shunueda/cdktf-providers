// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsPrivateDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain#id DnsPrivateDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain#name DnsPrivateDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain#remark DnsPrivateDomain#remark}
  */
  readonly remark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain#vpc_ids DnsPrivateDomain#vpc_ids}
  */
  readonly vpcIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain alibabacloudstack_dns_private_domain}
*/
export class DnsPrivateDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dns_private_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsPrivateDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsPrivateDomain to import
  * @param importFromId The id of the existing DnsPrivateDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsPrivateDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dns_private_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_private_domain alibabacloudstack_dns_private_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsPrivateDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DnsPrivateDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dns_private_domain',
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
    this._id = config.id;
    this._name = config.name;
    this._remark = config.remark;
    this._vpcIds = config.vpcIds;
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

  // record_count - computed: true, optional: false, required: false
  public get recordCount() {
    return this.getNumberAttribute('record_count');
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

  // vpc_ids - computed: false, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_ids'));
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
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
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
