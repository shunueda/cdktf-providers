// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of the certificate in a Base64 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#certificate_data Certificate#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Protection from accidental deletion of this object, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#delete_protection Certificate#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#description Certificate#description}
  */
  readonly description?: string;
  /**
  * How many days before the expiration of the certificate would you like to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#expiration_event_in Certificate#expiration_event_in}
  */
  readonly expirationEventIn?: string[];
  /**
  * CertificateFormat of the certificate and private key, possible values: cer,crt,pem,pfx,p12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#format Certificate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#id Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a key to use to encrypt the certificate's key (if empty, the account default protectionKey key will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#key Certificate#key}
  */
  readonly key?: string;
  /**
  * Content of the certificate's private key in a Base64 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#key_data Certificate#key_data}
  */
  readonly keyData?: string;
  /**
  * Certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#name Certificate#name}
  */
  readonly name: string;
  /**
  * Add tags attached to this object. To specify multiple tags use argument multiple times: --tag Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#tags Certificate#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate akeyless_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/certificate akeyless_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_certificate',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateData = config.certificateData;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._expirationEventIn = config.expirationEventIn;
    this._format = config.format;
    this._id = config.id;
    this._key = config.key;
    this._keyData = config.keyData;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_data - computed: true, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // expiration_event_in - computed: false, optional: true, required: false
  private _expirationEventIn?: string[]; 
  public get expirationEventIn() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_event_in'));
  }
  public set expirationEventIn(value: string[]) {
    this._expirationEventIn = value;
  }
  public resetExpirationEventIn() {
    this._expirationEventIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationEventInInput() {
    return this._expirationEventIn;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_data: cdktf.stringToTerraform(this._certificateData),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_event_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expirationEventIn),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      key_data: cdktf.stringToTerraform(this._keyData),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_data: {
        value: cdktf.stringToHclTerraform(this._certificateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
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
      expiration_event_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expirationEventIn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_data: {
        value: cdktf.stringToHclTerraform(this._keyData),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
