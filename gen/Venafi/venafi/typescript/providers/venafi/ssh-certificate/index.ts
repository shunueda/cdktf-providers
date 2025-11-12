// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address (FQDN/hostname/IP/CIDR) of the destination host where the certificate will be used to authenticate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#destination_address SshCertificate#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * The requested certificate extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#extension SshCertificate#extension}
  */
  readonly extension?: string[];
  /**
  * The DN of the policy folder where the certificate object will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#folder SshCertificate#folder}
  */
  readonly folder?: string;
  /**
  * The requested force command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#force_command SshCertificate#force_command}
  */
  readonly forceCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#id SshCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier of the requested certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#key_id SshCertificate#key_id}
  */
  readonly keyId: string;
  /**
  * Passphrase for encrypting the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#key_passphrase SshCertificate#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * The key size bits, they will be used for creating keypair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#key_size SshCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * The friendly name for the certificate object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#object_name SshCertificate#object_name}
  */
  readonly objectName?: string;
  /**
  * The requested principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#principal SshCertificate#principal}
  */
  readonly principal?: string[];
  /**
  * The requested principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#principals SshCertificate#principals}
  */
  readonly principals?: string[];
  /**
  * Public key that will be used to generate the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#public_key SshCertificate#public_key}
  */
  readonly publicKey?: string;
  /**
  * If the public key will be: file provided or local, service generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#public_key_method SshCertificate#public_key_method}
  */
  readonly publicKeyMethod?: string;
  /**
  * The requested source addresses as list of IP/CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#source_address SshCertificate#source_address}
  */
  readonly sourceAddress?: string[];
  /**
  * The certificate issuing template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#template SshCertificate#template}
  */
  readonly template: string;
  /**
  * How much time the requester wants to have the certificate valid, the format is hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#valid_hours SshCertificate#valid_hours}
  */
  readonly validHours?: number;
  /**
  * If the line endings of service's private key will end on MS windows format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#windows SshCertificate#windows}
  */
  readonly windows?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate venafi_ssh_certificate}
*/
export class SshCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi_ssh_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshCertificate to import
  * @param importFromId The id of the existing SshCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi_ssh_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/ssh_certificate venafi_ssh_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SshCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'venafi_ssh_certificate',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1',
        providerVersionConstraint: '0.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationAddress = config.destinationAddress;
    this._extension = config.extension;
    this._folder = config.folder;
    this._forceCommand = config.forceCommand;
    this._id = config.id;
    this._keyId = config.keyId;
    this._keyPassphrase = config.keyPassphrase;
    this._keySize = config.keySize;
    this._objectName = config.objectName;
    this._principal = config.principal;
    this._principals = config.principals;
    this._publicKey = config.publicKey;
    this._publicKeyMethod = config.publicKeyMethod;
    this._sourceAddress = config.sourceAddress;
    this._template = config.template;
    this._validHours = config.validHours;
    this._windows = config.windows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return this.getListAttribute('destination_address');
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // extension - computed: false, optional: true, required: false
  private _extension?: string[]; 
  public get extension() {
    return this.getListAttribute('extension');
  }
  public set extension(value: string[]) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // force_command - computed: false, optional: true, required: false
  private _forceCommand?: string; 
  public get forceCommand() {
    return this.getStringAttribute('force_command');
  }
  public set forceCommand(value: string) {
    this._forceCommand = value;
  }
  public resetForceCommand() {
    this._forceCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommandInput() {
    return this._forceCommand;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string[]; 
  public get principal() {
    return this.getListAttribute('principal');
  }
  public set principal(value: string[]) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_fingerprint - computed: true, optional: false, required: false
  public get publicKeyFingerprint() {
    return this.getStringAttribute('public_key_fingerprint');
  }

  // public_key_method - computed: false, optional: true, required: false
  private _publicKeyMethod?: string; 
  public get publicKeyMethod() {
    return this.getStringAttribute('public_key_method');
  }
  public set publicKeyMethod(value: string) {
    this._publicKeyMethod = value;
  }
  public resetPublicKeyMethod() {
    this._publicKeyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyMethodInput() {
    return this._publicKeyMethod;
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // signing_ca - computed: true, optional: false, required: false
  public get signingCa() {
    return this.getStringAttribute('signing_ca');
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return this.getListAttribute('source_address');
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_hours - computed: false, optional: true, required: false
  private _validHours?: number; 
  public get validHours() {
    return this.getNumberAttribute('valid_hours');
  }
  public set validHours(value: number) {
    this._validHours = value;
  }
  public resetValidHours() {
    this._validHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validHoursInput() {
    return this._validHours;
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // windows - computed: false, optional: true, required: false
  private _windows?: boolean | cdktf.IResolvable; 
  public get windows() {
    return this.getBooleanAttribute('windows');
  }
  public set windows(value: boolean | cdktf.IResolvable) {
    this._windows = value;
  }
  public resetWindows() {
    this._windows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationAddress),
      extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extension),
      folder: cdktf.stringToTerraform(this._folder),
      force_command: cdktf.stringToTerraform(this._forceCommand),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      key_size: cdktf.numberToTerraform(this._keySize),
      object_name: cdktf.stringToTerraform(this._objectName),
      principal: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principal),
      principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._principals),
      public_key: cdktf.stringToTerraform(this._publicKey),
      public_key_method: cdktf.stringToTerraform(this._publicKeyMethod),
      source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceAddress),
      template: cdktf.stringToTerraform(this._template),
      valid_hours: cdktf.numberToTerraform(this._validHours),
      windows: cdktf.booleanToTerraform(this._windows),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extension),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_command: {
        value: cdktf.stringToHclTerraform(this._forceCommand),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passphrase: {
        value: cdktf.stringToHclTerraform(this._keyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principal),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      principals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_method: {
        value: cdktf.stringToHclTerraform(this._publicKeyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_hours: {
        value: cdktf.numberToHclTerraform(this._validHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      windows: {
        value: cdktf.booleanToHclTerraform(this._windows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
