// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPoliciesPolicyPolicyMatchSourceAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * xpath is: config.Groups.V_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#from__zone__name SecurityPoliciesPolicyPolicyMatchSourceAddress#from__zone__name}
  */
  readonly fromZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#id SecurityPoliciesPolicyPolicyMatchSourceAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_policy.V_policy__1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#name SecurityPoliciesPolicyPolicyMatchSourceAddress#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#resource_name SecurityPoliciesPolicyPolicyMatchSourceAddress#resource_name}
  */
  readonly resourceName: string;
  /**
  * xpath is: config.Groups.V_policy.V_policy__1.V_match. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#source__address SecurityPoliciesPolicyPolicyMatchSourceAddress#source__address}
  */
  readonly sourceAddress?: string;
  /**
  * xpath is: config.Groups.V_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#to__zone__name SecurityPoliciesPolicyPolicyMatchSourceAddress#to__zone__name}
  */
  readonly toZoneName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address junos-vsrx_SecurityPoliciesPolicyPolicyMatchSource__Address}
*/
export class SecurityPoliciesPolicyPolicyMatchSourceAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_SecurityPoliciesPolicyPolicyMatchSource__Address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPoliciesPolicyPolicyMatchSourceAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPoliciesPolicyPolicyMatchSourceAddress to import
  * @param importFromId The id of the existing SecurityPoliciesPolicyPolicyMatchSourceAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPoliciesPolicyPolicyMatchSourceAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_SecurityPoliciesPolicyPolicyMatchSource__Address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/security_policies_policy_policy_match_source__address junos-vsrx_SecurityPoliciesPolicyPolicyMatchSource__Address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPoliciesPolicyPolicyMatchSourceAddressConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPoliciesPolicyPolicyMatchSourceAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_SecurityPoliciesPolicyPolicyMatchSource__Address',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fromZoneName = config.fromZoneName;
    this._id = config.id;
    this._name = config.name;
    this._resourceName = config.resourceName;
    this._sourceAddress = config.sourceAddress;
    this._toZoneName = config.toZoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // from__zone__name - computed: false, optional: true, required: false
  private _fromZoneName?: string; 
  public get fromZoneName() {
    return this.getStringAttribute('from__zone__name');
  }
  public set fromZoneName(value: string) {
    this._fromZoneName = value;
  }
  public resetFromZoneName() {
    this._fromZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromZoneNameInput() {
    return this._fromZoneName;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // source__address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source__address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // to__zone__name - computed: false, optional: true, required: false
  private _toZoneName?: string; 
  public get toZoneName() {
    return this.getStringAttribute('to__zone__name');
  }
  public set toZoneName(value: string) {
    this._toZoneName = value;
  }
  public resetToZoneName() {
    this._toZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toZoneNameInput() {
    return this._toZoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from__zone__name: cdktf.stringToTerraform(this._fromZoneName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      source__address: cdktf.stringToTerraform(this._sourceAddress),
      to__zone__name: cdktf.stringToTerraform(this._toZoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      from__zone__name: {
        value: cdktf.stringToHclTerraform(this._fromZoneName),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source__address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to__zone__name: {
        value: cdktf.stringToHclTerraform(this._toZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
