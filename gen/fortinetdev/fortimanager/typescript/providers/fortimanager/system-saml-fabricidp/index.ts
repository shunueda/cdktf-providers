// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSamlFabricidpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#dev_id SystemSamlFabricidp#dev_id}
  */
  readonly devId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#id SystemSamlFabricidp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#idp_cert SystemSamlFabricidp#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#idp_entity_id SystemSamlFabricidp#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#idp_single_logout_url SystemSamlFabricidp#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#idp_single_sign_on_url SystemSamlFabricidp#idp_single_sign_on_url}
  */
  readonly idpSingleSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#idp_status SystemSamlFabricidp#idp_status}
  */
  readonly idpStatus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp fortimanager_system_saml_fabricidp}
*/
export class SystemSamlFabricidp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_saml_fabricidp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSamlFabricidp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSamlFabricidp to import
  * @param importFromId The id of the existing SystemSamlFabricidp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSamlFabricidp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_saml_fabricidp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_saml_fabricidp fortimanager_system_saml_fabricidp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSamlFabricidpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSamlFabricidpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_saml_fabricidp',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._devId = config.devId;
    this._id = config.id;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpSingleLogoutUrl = config.idpSingleLogoutUrl;
    this._idpSingleSignOnUrl = config.idpSingleSignOnUrl;
    this._idpStatus = config.idpStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dev_id - computed: false, optional: true, required: false
  private _devId?: string; 
  public get devId() {
    return this.getStringAttribute('dev_id');
  }
  public set devId(value: string) {
    this._devId = value;
  }
  public resetDevId() {
    this._devId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIdInput() {
    return this._devId;
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

  // idp_cert - computed: false, optional: true, required: false
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
    this._idpCert = value;
  }
  public resetIdpCert() {
    this._idpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_single_logout_url - computed: false, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // idp_single_sign_on_url - computed: false, optional: true, required: false
  private _idpSingleSignOnUrl?: string; 
  public get idpSingleSignOnUrl() {
    return this.getStringAttribute('idp_single_sign_on_url');
  }
  public set idpSingleSignOnUrl(value: string) {
    this._idpSingleSignOnUrl = value;
  }
  public resetIdpSingleSignOnUrl() {
    this._idpSingleSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleSignOnUrlInput() {
    return this._idpSingleSignOnUrl;
  }

  // idp_status - computed: true, optional: true, required: false
  private _idpStatus?: string; 
  public get idpStatus() {
    return this.getStringAttribute('idp_status');
  }
  public set idpStatus(value: string) {
    this._idpStatus = value;
  }
  public resetIdpStatus() {
    this._idpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpStatusInput() {
    return this._idpStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dev_id: cdktf.stringToTerraform(this._devId),
      id: cdktf.stringToTerraform(this._id),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_single_logout_url: cdktf.stringToTerraform(this._idpSingleLogoutUrl),
      idp_single_sign_on_url: cdktf.stringToTerraform(this._idpSingleSignOnUrl),
      idp_status: cdktf.stringToTerraform(this._idpStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dev_id: {
        value: cdktf.stringToHclTerraform(this._devId),
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
      idp_cert: {
        value: cdktf.stringToHclTerraform(this._idpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_logout_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_single_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._idpSingleSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_status: {
        value: cdktf.stringToHclTerraform(this._idpStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
