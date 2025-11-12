// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcExplicitProtectionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#annotation VpcExplicitProtectionGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#id VpcExplicitProtectionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#name VpcExplicitProtectionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#switch1 VpcExplicitProtectionGroup#switch1}
  */
  readonly switch1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#switch2 VpcExplicitProtectionGroup#switch2}
  */
  readonly switch2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#vpc_domain_policy VpcExplicitProtectionGroup#vpc_domain_policy}
  */
  readonly vpcDomainPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#vpc_explicit_protection_group_id VpcExplicitProtectionGroup#vpc_explicit_protection_group_id}
  */
  readonly vpcExplicitProtectionGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group aci_vpc_explicit_protection_group}
*/
export class VpcExplicitProtectionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vpc_explicit_protection_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcExplicitProtectionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcExplicitProtectionGroup to import
  * @param importFromId The id of the existing VpcExplicitProtectionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcExplicitProtectionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vpc_explicit_protection_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vpc_explicit_protection_group aci_vpc_explicit_protection_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcExplicitProtectionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VpcExplicitProtectionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_vpc_explicit_protection_group',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._id = config.id;
    this._name = config.name;
    this._switch1 = config.switch1;
    this._switch2 = config.switch2;
    this._vpcDomainPolicy = config.vpcDomainPolicy;
    this._vpcExplicitProtectionGroupId = config.vpcExplicitProtectionGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: false, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // switch1 - computed: false, optional: false, required: true
  private _switch1?: string; 
  public get switch1() {
    return this.getStringAttribute('switch1');
  }
  public set switch1(value: string) {
    this._switch1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switch1Input() {
    return this._switch1;
  }

  // switch2 - computed: false, optional: false, required: true
  private _switch2?: string; 
  public get switch2() {
    return this.getStringAttribute('switch2');
  }
  public set switch2(value: string) {
    this._switch2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switch2Input() {
    return this._switch2;
  }

  // vpc_domain_policy - computed: true, optional: true, required: false
  private _vpcDomainPolicy?: string; 
  public get vpcDomainPolicy() {
    return this.getStringAttribute('vpc_domain_policy');
  }
  public set vpcDomainPolicy(value: string) {
    this._vpcDomainPolicy = value;
  }
  public resetVpcDomainPolicy() {
    this._vpcDomainPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcDomainPolicyInput() {
    return this._vpcDomainPolicy;
  }

  // vpc_explicit_protection_group_id - computed: true, optional: true, required: false
  private _vpcExplicitProtectionGroupId?: string; 
  public get vpcExplicitProtectionGroupId() {
    return this.getStringAttribute('vpc_explicit_protection_group_id');
  }
  public set vpcExplicitProtectionGroupId(value: string) {
    this._vpcExplicitProtectionGroupId = value;
  }
  public resetVpcExplicitProtectionGroupId() {
    this._vpcExplicitProtectionGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcExplicitProtectionGroupIdInput() {
    return this._vpcExplicitProtectionGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      switch1: cdktf.stringToTerraform(this._switch1),
      switch2: cdktf.stringToTerraform(this._switch2),
      vpc_domain_policy: cdktf.stringToTerraform(this._vpcDomainPolicy),
      vpc_explicit_protection_group_id: cdktf.stringToTerraform(this._vpcExplicitProtectionGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      switch1: {
        value: cdktf.stringToHclTerraform(this._switch1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch2: {
        value: cdktf.stringToHclTerraform(this._switch2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_domain_policy: {
        value: cdktf.stringToHclTerraform(this._vpcDomainPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_explicit_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._vpcExplicitProtectionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
