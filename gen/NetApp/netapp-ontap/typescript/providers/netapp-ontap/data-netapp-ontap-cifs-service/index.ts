// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapCifsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service#cx_profile_name DataNetappOntapCifsService#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Name of the CIFS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service#name DataNetappOntapCifsService#name}
  */
  readonly name: string;
}
export interface DataNetappOntapCifsServiceAdDomain {
}

export function dataNetappOntapCifsServiceAdDomainToTerraform(struct?: DataNetappOntapCifsServiceAdDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapCifsServiceAdDomainToHclTerraform(struct?: DataNetappOntapCifsServiceAdDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapCifsServiceAdDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapCifsServiceAdDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsServiceAdDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataNetappOntapCifsServiceNetbios {
}

export function dataNetappOntapCifsServiceNetbiosToTerraform(struct?: DataNetappOntapCifsServiceNetbios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapCifsServiceNetbiosToHclTerraform(struct?: DataNetappOntapCifsServiceNetbios): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapCifsServiceNetbiosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapCifsServiceNetbios | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsServiceNetbios | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // wins_servers - computed: true, optional: false, required: false
  public get winsServers() {
    return this.getListAttribute('wins_servers');
  }
}
export interface DataNetappOntapCifsServiceSecurity {
}

export function dataNetappOntapCifsServiceSecurityToTerraform(struct?: DataNetappOntapCifsServiceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetappOntapCifsServiceSecurityToHclTerraform(struct?: DataNetappOntapCifsServiceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetappOntapCifsServiceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetappOntapCifsServiceSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetappOntapCifsServiceSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertised_kdc_encryptions - computed: true, optional: false, required: false
  public get advertisedKdcEncryptions() {
    return cdktf.Fn.tolist(this.getListAttribute('advertised_kdc_encryptions'));
  }

  // aes_netlogon_enabled - computed: true, optional: false, required: false
  public get aesNetlogonEnabled() {
    return this.getBooleanAttribute('aes_netlogon_enabled');
  }

  // encrypt_dc_connection - computed: true, optional: false, required: false
  public get encryptDcConnection() {
    return this.getBooleanAttribute('encrypt_dc_connection');
  }

  // kdc_encryption - computed: true, optional: false, required: false
  public get kdcEncryption() {
    return this.getBooleanAttribute('kdc_encryption');
  }

  // ldap_referral_enabled - computed: true, optional: false, required: false
  public get ldapReferralEnabled() {
    return this.getBooleanAttribute('ldap_referral_enabled');
  }

  // lm_compatibility_level - computed: true, optional: false, required: false
  public get lmCompatibilityLevel() {
    return this.getStringAttribute('lm_compatibility_level');
  }

  // restrict_anonymous - computed: true, optional: false, required: false
  public get restrictAnonymous() {
    return this.getStringAttribute('restrict_anonymous');
  }

  // session_security - computed: true, optional: false, required: false
  public get sessionSecurity() {
    return this.getStringAttribute('session_security');
  }

  // smb_encryption - computed: true, optional: false, required: false
  public get smbEncryption() {
    return this.getBooleanAttribute('smb_encryption');
  }

  // smb_signing - computed: true, optional: false, required: false
  public get smbSigning() {
    return this.getBooleanAttribute('smb_signing');
  }

  // try_ldap_channel_binding - computed: true, optional: false, required: false
  public get tryLdapChannelBinding() {
    return this.getBooleanAttribute('try_ldap_channel_binding');
  }

  // use_ldaps - computed: true, optional: false, required: false
  public get useLdaps() {
    return this.getBooleanAttribute('use_ldaps');
  }

  // use_start_tls - computed: true, optional: false, required: false
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service netapp-ontap_cifs_service}
*/
export class DataNetappOntapCifsService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_cifs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapCifsService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapCifsService to import
  * @param importFromId The id of the existing DataNetappOntapCifsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapCifsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_cifs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/cifs_service netapp-ontap_cifs_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapCifsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapCifsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_cifs_service',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_domain - computed: true, optional: false, required: false
  private _adDomain = new DataNetappOntapCifsServiceAdDomainOutputReference(this, "ad_domain");
  public get adDomain() {
    return this._adDomain;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // default_unix_user - computed: true, optional: false, required: false
  public get defaultUnixUser() {
    return this.getStringAttribute('default_unix_user');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // netbios - computed: true, optional: false, required: false
  private _netbios = new DataNetappOntapCifsServiceNetbiosOutputReference(this, "netbios");
  public get netbios() {
    return this._netbios;
  }

  // security - computed: true, optional: false, required: false
  private _security = new DataNetappOntapCifsServiceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }

  // svm_name - computed: true, optional: false, required: false
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
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
