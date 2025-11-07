// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Connection description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#description OciConnection#description}
  */
  readonly description?: string;
  /**
  * (Updateable) Path to or data of the OCI private key file (PEM format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#key_file OciConnection#key_file}
  */
  readonly keyFile: string;
  /**
  * (Updateable) Passphrase if the OCI key file is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#key_file_pass_phrase OciConnection#key_file_pass_phrase}
  */
  readonly keyFilePassPhrase?: string;
  /**
  * (Updateable) A list of key:value pairs to store with the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#meta OciConnection#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#name OciConnection#name}
  */
  readonly name: string;
  /**
  * (Updateable) Fingerprint of the public key added to the OCI user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#pub_key_fingerprint OciConnection#pub_key_fingerprint}
  */
  readonly pubKeyFingerprint: string;
  /**
  * (Updateable) OCI region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#region OciConnection#region}
  */
  readonly region: string;
  /**
  * (Updateable) Tenant OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#tenancy_ocid OciConnection#tenancy_ocid}
  */
  readonly tenancyOcid: string;
  /**
  * (Updateable) User OCID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#user_ocid OciConnection#user_ocid}
  */
  readonly userOcid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection ciphertrust_oci_connection}
*/
export class OciConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciConnection to import
  * @param importFromId The id of the existing OciConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_connection ciphertrust_oci_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: OciConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_connection',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._keyFile = config.keyFile;
    this._keyFilePassPhrase = config.keyFilePassPhrase;
    this._meta = config.meta;
    this._name = config.name;
    this._pubKeyFingerprint = config.pubKeyFingerprint;
    this._region = config.region;
    this._tenancyOcid = config.tenancyOcid;
    this._userOcid = config.userOcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // key_file - computed: false, optional: false, required: true
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_file_pass_phrase - computed: false, optional: true, required: false
  private _keyFilePassPhrase?: string; 
  public get keyFilePassPhrase() {
    return this.getStringAttribute('key_file_pass_phrase');
  }
  public set keyFilePassPhrase(value: string) {
    this._keyFilePassPhrase = value;
  }
  public resetKeyFilePassPhrase() {
    this._keyFilePassPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFilePassPhraseInput() {
    return this._keyFilePassPhrase;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // pub_key_fingerprint - computed: false, optional: false, required: true
  private _pubKeyFingerprint?: string; 
  public get pubKeyFingerprint() {
    return this.getStringAttribute('pub_key_fingerprint');
  }
  public set pubKeyFingerprint(value: string) {
    this._pubKeyFingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubKeyFingerprintInput() {
    return this._pubKeyFingerprint;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tenancy_ocid - computed: false, optional: false, required: true
  private _tenancyOcid?: string; 
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
  public set tenancyOcid(value: string) {
    this._tenancyOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyOcidInput() {
    return this._tenancyOcid;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_ocid - computed: false, optional: false, required: true
  private _userOcid?: string; 
  public get userOcid() {
    return this.getStringAttribute('user_ocid');
  }
  public set userOcid(value: string) {
    this._userOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOcidInput() {
    return this._userOcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_file_pass_phrase: cdktf.stringToTerraform(this._keyFilePassPhrase),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      pub_key_fingerprint: cdktf.stringToTerraform(this._pubKeyFingerprint),
      region: cdktf.stringToTerraform(this._region),
      tenancy_ocid: cdktf.stringToTerraform(this._tenancyOcid),
      user_ocid: cdktf.stringToTerraform(this._userOcid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_file_pass_phrase: {
        value: cdktf.stringToHclTerraform(this._keyFilePassPhrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pub_key_fingerprint: {
        value: cdktf.stringToHclTerraform(this._pubKeyFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_ocid: {
        value: cdktf.stringToHclTerraform(this._tenancyOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ocid: {
        value: cdktf.stringToHclTerraform(this._userOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
