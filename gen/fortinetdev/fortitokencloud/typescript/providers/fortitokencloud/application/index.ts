// https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#attr_mapping Application#attr_mapping}
  */
  readonly attrMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#branding_id Application#branding_id}
  */
  readonly brandingId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#realm_id Application#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#signing_cert_id Application#signing_cert_id}
  */
  readonly signingCertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#sp_acs_url Application#sp_acs_url}
  */
  readonly spAcsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#sp_entity_id Application#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#sp_slo_url Application#sp_slo_url}
  */
  readonly spSloUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#ttl Application#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#user_source_ids Application#user_source_ids}
  */
  readonly userSourceIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application fortitokencloud_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortitokencloud_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortitokencloud_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortitokencloud/1.0.0/docs/resources/application fortitokencloud_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortitokencloud_application',
      terraformGeneratorMetadata: {
        providerName: 'fortitokencloud',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attrMapping = config.attrMapping;
    this._brandingId = config.brandingId;
    this._name = config.name;
    this._realmId = config.realmId;
    this._signingCertId = config.signingCertId;
    this._spAcsUrl = config.spAcsUrl;
    this._spEntityId = config.spEntityId;
    this._spSloUrl = config.spSloUrl;
    this._ttl = config.ttl;
    this._userSourceIds = config.userSourceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attr_mapping - computed: true, optional: true, required: false
  private _attrMapping?: string; 
  public get attrMapping() {
    return this.getStringAttribute('attr_mapping');
  }
  public set attrMapping(value: string) {
    this._attrMapping = value;
  }
  public resetAttrMapping() {
    this._attrMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrMappingInput() {
    return this._attrMapping;
  }

  // branding_id - computed: true, optional: true, required: false
  private _brandingId?: string; 
  public get brandingId() {
    return this.getStringAttribute('branding_id');
  }
  public set brandingId(value: string) {
    this._brandingId = value;
  }
  public resetBrandingId() {
    this._brandingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandingIdInput() {
    return this._brandingId;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // signing_cert_id - computed: true, optional: true, required: false
  private _signingCertId?: string; 
  public get signingCertId() {
    return this.getStringAttribute('signing_cert_id');
  }
  public set signingCertId(value: string) {
    this._signingCertId = value;
  }
  public resetSigningCertId() {
    this._signingCertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertIdInput() {
    return this._signingCertId;
  }

  // slo_url - computed: true, optional: false, required: false
  public get sloUrl() {
    return this.getStringAttribute('slo_url');
  }

  // sp_acs_url - computed: false, optional: true, required: false
  private _spAcsUrl?: string; 
  public get spAcsUrl() {
    return this.getStringAttribute('sp_acs_url');
  }
  public set spAcsUrl(value: string) {
    this._spAcsUrl = value;
  }
  public resetSpAcsUrl() {
    this._spAcsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spAcsUrlInput() {
    return this._spAcsUrl;
  }

  // sp_entity_id - computed: true, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sp_slo_url - computed: false, optional: true, required: false
  private _spSloUrl?: string; 
  public get spSloUrl() {
    return this.getStringAttribute('sp_slo_url');
  }
  public set spSloUrl(value: string) {
    this._spSloUrl = value;
  }
  public resetSpSloUrl() {
    this._spSloUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSloUrlInput() {
    return this._spSloUrl;
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // user_source_ids - computed: true, optional: true, required: false
  private _userSourceIds?: string[]; 
  public get userSourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_source_ids'));
  }
  public set userSourceIds(value: string[]) {
    this._userSourceIds = value;
  }
  public resetUserSourceIds() {
    this._userSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSourceIdsInput() {
    return this._userSourceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attr_mapping: cdktf.stringToTerraform(this._attrMapping),
      branding_id: cdktf.stringToTerraform(this._brandingId),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      signing_cert_id: cdktf.stringToTerraform(this._signingCertId),
      sp_acs_url: cdktf.stringToTerraform(this._spAcsUrl),
      sp_entity_id: cdktf.stringToTerraform(this._spEntityId),
      sp_slo_url: cdktf.stringToTerraform(this._spSloUrl),
      ttl: cdktf.numberToTerraform(this._ttl),
      user_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userSourceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attr_mapping: {
        value: cdktf.stringToHclTerraform(this._attrMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branding_id: {
        value: cdktf.stringToHclTerraform(this._brandingId),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_cert_id: {
        value: cdktf.stringToHclTerraform(this._signingCertId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_acs_url: {
        value: cdktf.stringToHclTerraform(this._spAcsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_entity_id: {
        value: cdktf.stringToHclTerraform(this._spEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_slo_url: {
        value: cdktf.stringToHclTerraform(this._spSloUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userSourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
