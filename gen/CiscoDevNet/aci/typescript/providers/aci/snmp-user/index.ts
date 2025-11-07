// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#annotation SnmpUser#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#authorization_key SnmpUser#authorization_key}
  */
  readonly authorizationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#authorization_type SnmpUser#authorization_type}
  */
  readonly authorizationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#description SnmpUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#id SnmpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#name SnmpUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#name_alias SnmpUser#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#privacy_key SnmpUser#privacy_key}
  */
  readonly privacyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#privacy_type SnmpUser#privacy_type}
  */
  readonly privacyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#snmp_policy_dn SnmpUser#snmp_policy_dn}
  */
  readonly snmpPolicyDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user aci_snmp_user}
*/
export class SnmpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_snmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpUser to import
  * @param importFromId The id of the existing SnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_snmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/snmp_user aci_snmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpUserConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_snmp_user',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
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
    this._authorizationKey = config.authorizationKey;
    this._authorizationType = config.authorizationType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._privacyKey = config.privacyKey;
    this._privacyType = config.privacyType;
    this._snmpPolicyDn = config.snmpPolicyDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
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

  // authorization_key - computed: false, optional: false, required: true
  private _authorizationKey?: string; 
  public get authorizationKey() {
    return this.getStringAttribute('authorization_key');
  }
  public set authorizationKey(value: string) {
    this._authorizationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationKeyInput() {
    return this._authorizationKey;
  }

  // authorization_type - computed: false, optional: false, required: true
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // privacy_key - computed: true, optional: true, required: false
  private _privacyKey?: string; 
  public get privacyKey() {
    return this.getStringAttribute('privacy_key');
  }
  public set privacyKey(value: string) {
    this._privacyKey = value;
  }
  public resetPrivacyKey() {
    this._privacyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyKeyInput() {
    return this._privacyKey;
  }

  // privacy_type - computed: true, optional: true, required: false
  private _privacyType?: string; 
  public get privacyType() {
    return this.getStringAttribute('privacy_type');
  }
  public set privacyType(value: string) {
    this._privacyType = value;
  }
  public resetPrivacyType() {
    this._privacyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyTypeInput() {
    return this._privacyType;
  }

  // snmp_policy_dn - computed: false, optional: false, required: true
  private _snmpPolicyDn?: string; 
  public get snmpPolicyDn() {
    return this.getStringAttribute('snmp_policy_dn');
  }
  public set snmpPolicyDn(value: string) {
    this._snmpPolicyDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPolicyDnInput() {
    return this._snmpPolicyDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      authorization_key: cdktf.stringToTerraform(this._authorizationKey),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      privacy_key: cdktf.stringToTerraform(this._privacyKey),
      privacy_type: cdktf.stringToTerraform(this._privacyType),
      snmp_policy_dn: cdktf.stringToTerraform(this._snmpPolicyDn),
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
      authorization_key: {
        value: cdktf.stringToHclTerraform(this._authorizationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_key: {
        value: cdktf.stringToHclTerraform(this._privacyKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_type: {
        value: cdktf.stringToHclTerraform(this._privacyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_policy_dn: {
        value: cdktf.stringToHclTerraform(this._snmpPolicyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
