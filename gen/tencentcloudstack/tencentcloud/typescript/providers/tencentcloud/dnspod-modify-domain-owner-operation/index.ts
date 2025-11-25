// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnspodModifyDomainOwnerOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account to which the domain needs to be transferred, supporting Uin or email format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation#account DnspodModifyDomainOwnerOperation#account}
  */
  readonly account: string;
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation#domain DnspodModifyDomainOwnerOperation#domain}
  */
  readonly domain: string;
  /**
  * Domain ID. The parameter DomainId has a higher priority than the parameter Domain. If the parameter DomainId is passed, the parameter Domain will be ignored. You can find all Domains and DomainIds through the DescribeDomainList interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation#domain_id DnspodModifyDomainOwnerOperation#domain_id}
  */
  readonly domainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation#id DnspodModifyDomainOwnerOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation tencentcloud_dnspod_modify_domain_owner_operation}
*/
export class DnspodModifyDomainOwnerOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_modify_domain_owner_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnspodModifyDomainOwnerOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnspodModifyDomainOwnerOperation to import
  * @param importFromId The id of the existing DnspodModifyDomainOwnerOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnspodModifyDomainOwnerOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_modify_domain_owner_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_modify_domain_owner_operation tencentcloud_dnspod_modify_domain_owner_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnspodModifyDomainOwnerOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DnspodModifyDomainOwnerOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_modify_domain_owner_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._domain = config.domain;
    this._domainId = config.domainId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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
      account: cdktf.stringToTerraform(this._account),
      domain: cdktf.stringToTerraform(this._domain),
      domain_id: cdktf.numberToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
