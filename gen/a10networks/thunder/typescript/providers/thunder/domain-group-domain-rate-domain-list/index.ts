// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainGroupDomainRateDomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain_group_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#domain_group_name DomainGroupDomainRateDomainList#domain_group_name}
  */
  readonly domainGroupName: string;
  /**
  * DummyName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#dummy_name DomainGroupDomainRateDomainList#dummy_name}
  */
  readonly dummyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#id DomainGroupDomainRateDomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the domain list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#name DomainGroupDomainRateDomainList#name}
  */
  readonly name: string;
  /**
  * Per suffix domain rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#per_suffix_rate DomainGroupDomainRateDomainList#per_suffix_rate}
  */
  readonly perSuffixRate?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#user_tag DomainGroupDomainRateDomainList#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#uuid DomainGroupDomainRateDomainList#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list thunder_domain_group_domain_rate_domain_list}
*/
export class DomainGroupDomainRateDomainList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_domain_group_domain_rate_domain_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainGroupDomainRateDomainList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainGroupDomainRateDomainList to import
  * @param importFromId The id of the existing DomainGroupDomainRateDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainGroupDomainRateDomainList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_domain_group_domain_rate_domain_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/domain_group_domain_rate_domain_list thunder_domain_group_domain_rate_domain_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainGroupDomainRateDomainListConfig
  */
  public constructor(scope: Construct, id: string, config: DomainGroupDomainRateDomainListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_domain_group_domain_rate_domain_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainGroupName = config.domainGroupName;
    this._dummyName = config.dummyName;
    this._id = config.id;
    this._name = config.name;
    this._perSuffixRate = config.perSuffixRate;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_group_name - computed: false, optional: false, required: true
  private _domainGroupName?: string; 
  public get domainGroupName() {
    return this.getStringAttribute('domain_group_name');
  }
  public set domainGroupName(value: string) {
    this._domainGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupNameInput() {
    return this._domainGroupName;
  }

  // dummy_name - computed: false, optional: false, required: true
  private _dummyName?: string; 
  public get dummyName() {
    return this.getStringAttribute('dummy_name');
  }
  public set dummyName(value: string) {
    this._dummyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyNameInput() {
    return this._dummyName;
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

  // per_suffix_rate - computed: false, optional: true, required: false
  private _perSuffixRate?: number; 
  public get perSuffixRate() {
    return this.getNumberAttribute('per_suffix_rate');
  }
  public set perSuffixRate(value: number) {
    this._perSuffixRate = value;
  }
  public resetPerSuffixRate() {
    this._perSuffixRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSuffixRateInput() {
    return this._perSuffixRate;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_group_name: cdktf.stringToTerraform(this._domainGroupName),
      dummy_name: cdktf.stringToTerraform(this._dummyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      per_suffix_rate: cdktf.numberToTerraform(this._perSuffixRate),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_group_name: {
        value: cdktf.stringToHclTerraform(this._domainGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dummy_name: {
        value: cdktf.stringToHclTerraform(this._dummyName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_suffix_rate: {
        value: cdktf.numberToHclTerraform(this._perSuffixRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
