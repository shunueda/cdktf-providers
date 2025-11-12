// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustsecSecurityGroupAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#acl_content TrustsecSecurityGroupAcl#acl_content}
  */
  readonly aclContent: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#description TrustsecSecurityGroupAcl#description}
  */
  readonly description?: string;
  /**
  * IP Version
  *   - Choices: `IPV4`, `IPV6`, `IP_AGNOSTIC`
  *   - Default value: `IP_AGNOSTIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#ip_version TrustsecSecurityGroupAcl#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The name of the security group ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#name TrustsecSecurityGroupAcl#name}
  */
  readonly name: string;
  /**
  * Read-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#read_only TrustsecSecurityGroupAcl#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl ise_trustsec_security_group_acl}
*/
export class TrustsecSecurityGroupAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_trustsec_security_group_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustsecSecurityGroupAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustsecSecurityGroupAcl to import
  * @param importFromId The id of the existing TrustsecSecurityGroupAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustsecSecurityGroupAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_trustsec_security_group_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/trustsec_security_group_acl ise_trustsec_security_group_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustsecSecurityGroupAclConfig
  */
  public constructor(scope: Construct, id: string, config: TrustsecSecurityGroupAclConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_trustsec_security_group_acl',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclContent = config.aclContent;
    this._description = config.description;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._readOnly = config.readOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_content - computed: false, optional: false, required: true
  private _aclContent?: string; 
  public get aclContent() {
    return this.getStringAttribute('acl_content');
  }
  public set aclContent(value: string) {
    this._aclContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclContentInput() {
    return this._aclContent;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_content: cdktf.stringToTerraform(this._aclContent),
      description: cdktf.stringToTerraform(this._description),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      read_only: cdktf.booleanToTerraform(this._readOnly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_content: {
        value: cdktf.stringToHclTerraform(this._aclContent),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
