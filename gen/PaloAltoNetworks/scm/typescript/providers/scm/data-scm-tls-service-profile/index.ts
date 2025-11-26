// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmTlsServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile#id DataScmTlsServiceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * TLS service profile name. The value is `muCustomDomainSSLProfile` when it is used on mobile-agent infra settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile#name DataScmTlsServiceProfile#name}
  */
  readonly name?: string;
}
export interface DataScmTlsServiceProfileProtocolSettings {
}

export function dataScmTlsServiceProfileProtocolSettingsToTerraform(struct?: DataScmTlsServiceProfileProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmTlsServiceProfileProtocolSettingsToHclTerraform(struct?: DataScmTlsServiceProfileProtocolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmTlsServiceProfileProtocolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmTlsServiceProfileProtocolSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmTlsServiceProfileProtocolSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_algo_sha1 - computed: true, optional: false, required: false
  public get authAlgoSha1() {
    return this.getBooleanAttribute('auth_algo_sha1');
  }

  // auth_algo_sha256 - computed: true, optional: false, required: false
  public get authAlgoSha256() {
    return this.getBooleanAttribute('auth_algo_sha256');
  }

  // auth_algo_sha384 - computed: true, optional: false, required: false
  public get authAlgoSha384() {
    return this.getBooleanAttribute('auth_algo_sha384');
  }

  // enc_algo_3des - computed: true, optional: false, required: false
  public get encAlgo3Des() {
    return this.getBooleanAttribute('enc_algo_3des');
  }

  // enc_algo_aes_128_cbc - computed: true, optional: false, required: false
  public get encAlgoAes128Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_128_cbc');
  }

  // enc_algo_aes_128_gcm - computed: true, optional: false, required: false
  public get encAlgoAes128Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_128_gcm');
  }

  // enc_algo_aes_256_cbc - computed: true, optional: false, required: false
  public get encAlgoAes256Cbc() {
    return this.getBooleanAttribute('enc_algo_aes_256_cbc');
  }

  // enc_algo_aes_256_gcm - computed: true, optional: false, required: false
  public get encAlgoAes256Gcm() {
    return this.getBooleanAttribute('enc_algo_aes_256_gcm');
  }

  // enc_algo_rc4 - computed: true, optional: false, required: false
  public get encAlgoRc4() {
    return this.getBooleanAttribute('enc_algo_rc4');
  }

  // keyxchg_algo_dhe - computed: true, optional: false, required: false
  public get keyxchgAlgoDhe() {
    return this.getBooleanAttribute('keyxchg_algo_dhe');
  }

  // keyxchg_algo_ecdhe - computed: true, optional: false, required: false
  public get keyxchgAlgoEcdhe() {
    return this.getBooleanAttribute('keyxchg_algo_ecdhe');
  }

  // keyxchg_algo_rsa - computed: true, optional: false, required: false
  public get keyxchgAlgoRsa() {
    return this.getBooleanAttribute('keyxchg_algo_rsa');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile scm_tls_service_profile}
*/
export class DataScmTlsServiceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_tls_service_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmTlsServiceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmTlsServiceProfile to import
  * @param importFromId The id of the existing DataScmTlsServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmTlsServiceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_tls_service_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/tls_service_profile scm_tls_service_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmTlsServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmTlsServiceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_tls_service_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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

  // protocol_settings - computed: true, optional: false, required: false
  private _protocolSettings = new DataScmTlsServiceProfileProtocolSettingsOutputReference(this, "protocol_settings");
  public get protocolSettings() {
    return this._protocolSettings;
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
