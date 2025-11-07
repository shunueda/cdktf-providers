// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#apic_site_id Site#apic_site_id}
  */
  readonly apicSiteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#cloud_providers Site#cloud_providers}
  */
  readonly cloudProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#id Site#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#labels Site#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#location Site#location}
  */
  readonly location?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#login_domain Site#login_domain}
  */
  readonly loginDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#maintenance_mode Site#maintenance_mode}
  */
  readonly maintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#name Site#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#password Site#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#platform Site#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#urls Site#urls}
  */
  readonly urls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#username Site#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site mso_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/site mso_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_site',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apicSiteId = config.apicSiteId;
    this._cloudProviders = config.cloudProviders;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._loginDomain = config.loginDomain;
    this._maintenanceMode = config.maintenanceMode;
    this._name = config.name;
    this._password = config.password;
    this._platform = config.platform;
    this._urls = config.urls;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apic_site_id - computed: false, optional: false, required: true
  private _apicSiteId?: string; 
  public get apicSiteId() {
    return this.getStringAttribute('apic_site_id');
  }
  public set apicSiteId(value: string) {
    this._apicSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apicSiteIdInput() {
    return this._apicSiteId;
  }

  // cloud_providers - computed: true, optional: true, required: false
  private _cloudProviders?: string[]; 
  public get cloudProviders() {
    return this.getListAttribute('cloud_providers');
  }
  public set cloudProviders(value: string[]) {
    this._cloudProviders = value;
  }
  public resetCloudProviders() {
    this._cloudProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProvidersInput() {
    return this._cloudProviders;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: { [key: string]: string }; 
  public get location() {
    return this.getStringMapAttribute('location');
  }
  public set location(value: { [key: string]: string }) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // login_domain - computed: true, optional: true, required: false
  private _loginDomain?: string; 
  public get loginDomain() {
    return this.getStringAttribute('login_domain');
  }
  public set loginDomain(value: string) {
    this._loginDomain = value;
  }
  public resetLoginDomain() {
    this._loginDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginDomainInput() {
    return this._loginDomain;
  }

  // maintenance_mode - computed: false, optional: true, required: false
  private _maintenanceMode?: boolean | cdktf.IResolvable; 
  public get maintenanceMode() {
    return this.getBooleanAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: boolean | cdktf.IResolvable) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // urls - computed: true, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apic_site_id: cdktf.stringToTerraform(this._apicSiteId),
      cloud_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudProviders),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      location: cdktf.hashMapper(cdktf.stringToTerraform)(this._location),
      login_domain: cdktf.stringToTerraform(this._loginDomain),
      maintenance_mode: cdktf.booleanToTerraform(this._maintenanceMode),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      platform: cdktf.stringToTerraform(this._platform),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apic_site_id: {
        value: cdktf.stringToHclTerraform(this._apicSiteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._location),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      login_domain: {
        value: cdktf.stringToHclTerraform(this._loginDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_mode: {
        value: cdktf.booleanToHclTerraform(this._maintenanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
