// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#___path___ SnmpCommunity#___path___}
  */
  readonly path?: string;
  /**
  * Set of IP (v4 or v6) addresses or CIDR networks from which connections to SNMP server are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#addresses SnmpCommunity#addresses}
  */
  readonly addresses?: string[];
  /**
  * Password used to authenticate the connection to the server (SNMPv3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#authentication_password SnmpCommunity#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * The protocol used for authentication (SNMPv3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#authentication_protocol SnmpCommunity#authentication_protocol}
  */
  readonly authenticationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#comment SnmpCommunity#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#disabled SnmpCommunity#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The password used for encryption (SNMPv3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#encryption_password SnmpCommunity#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * encryption protocol to be used to encrypt the communication (SNMPv3). AES (see rfc3826) available since v6.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#encryption_protocol SnmpCommunity#encryption_protocol}
  */
  readonly encryptionProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#id SnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Community Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#name SnmpCommunity#name}
  */
  readonly name?: string;
  /**
  * Whether read access is enabled for this community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#read_access SnmpCommunity#read_access}
  */
  readonly readAccess?: boolean | cdktf.IResolvable;
  /**
  * Security features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#security SnmpCommunity#security}
  */
  readonly security?: string;
  /**
  * Whether write access is enabled for this community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#write_access SnmpCommunity#write_access}
  */
  readonly writeAccess?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community routeros_snmp_community}
*/
export class SnmpCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_snmp_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpCommunity to import
  * @param importFromId The id of the existing SnmpCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_snmp_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp_community routeros_snmp_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpCommunityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpCommunityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_snmp_community',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addresses = config.addresses;
    this._authenticationPassword = config.authenticationPassword;
    this._authenticationProtocol = config.authenticationProtocol;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._encryptionPassword = config.encryptionPassword;
    this._encryptionProtocol = config.encryptionProtocol;
    this._id = config.id;
    this._name = config.name;
    this._readAccess = config.readAccess;
    this._security = config.security;
    this._writeAccess = config.writeAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // authentication_password - computed: false, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
  }

  // authentication_protocol - computed: false, optional: true, required: false
  private _authenticationProtocol?: string; 
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }
  public set authenticationProtocol(value: string) {
    this._authenticationProtocol = value;
  }
  public resetAuthenticationProtocol() {
    this._authenticationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProtocolInput() {
    return this._authenticationProtocol;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // encryption_password - computed: false, optional: true, required: false
  private _encryptionPassword?: string; 
  public get encryptionPassword() {
    return this.getStringAttribute('encryption_password');
  }
  public set encryptionPassword(value: string) {
    this._encryptionPassword = value;
  }
  public resetEncryptionPassword() {
    this._encryptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionPasswordInput() {
    return this._encryptionPassword;
  }

  // encryption_protocol - computed: false, optional: true, required: false
  private _encryptionProtocol?: string; 
  public get encryptionProtocol() {
    return this.getStringAttribute('encryption_protocol');
  }
  public set encryptionProtocol(value: string) {
    this._encryptionProtocol = value;
  }
  public resetEncryptionProtocol() {
    this._encryptionProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionProtocolInput() {
    return this._encryptionProtocol;
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

  // read_access - computed: false, optional: true, required: false
  private _readAccess?: boolean | cdktf.IResolvable; 
  public get readAccess() {
    return this.getBooleanAttribute('read_access');
  }
  public set readAccess(value: boolean | cdktf.IResolvable) {
    this._readAccess = value;
  }
  public resetReadAccess() {
    this._readAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAccessInput() {
    return this._readAccess;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // write_access - computed: false, optional: true, required: false
  private _writeAccess?: boolean | cdktf.IResolvable; 
  public get writeAccess() {
    return this.getBooleanAttribute('write_access');
  }
  public set writeAccess(value: boolean | cdktf.IResolvable) {
    this._writeAccess = value;
  }
  public resetWriteAccess() {
    this._writeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAccessInput() {
    return this._writeAccess;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      authentication_protocol: cdktf.stringToTerraform(this._authenticationProtocol),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      encryption_password: cdktf.stringToTerraform(this._encryptionPassword),
      encryption_protocol: cdktf.stringToTerraform(this._encryptionProtocol),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      read_access: cdktf.booleanToTerraform(this._readAccess),
      security: cdktf.stringToTerraform(this._security),
      write_access: cdktf.booleanToTerraform(this._writeAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_protocol: {
        value: cdktf.stringToHclTerraform(this._authenticationProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_password: {
        value: cdktf.stringToHclTerraform(this._encryptionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_protocol: {
        value: cdktf.stringToHclTerraform(this._encryptionProtocol),
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
      read_access: {
        value: cdktf.booleanToHclTerraform(this._readAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_access: {
        value: cdktf.booleanToHclTerraform(this._writeAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
