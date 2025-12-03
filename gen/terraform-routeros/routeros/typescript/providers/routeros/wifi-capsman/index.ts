// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiCapsmanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#___path___ WifiCapsman#___path___}
  */
  readonly path?: string;
  /**
  * Device CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#ca_certificate WifiCapsman#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Device certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#certificate WifiCapsman#certificate}
  */
  readonly certificate?: string;
  /**
  * Disable or enable CAPsMAN functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#enabled WifiCapsman#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#id WifiCapsman#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of interfaces on which CAPsMAN will listen for CAP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#interfaces WifiCapsman#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Folder location for the RouterOS packages. For example, use '/upgrade' to specify the upgrade folder from the files section. If empty string is set, CAPsMAN can use built-in RouterOS packages, note that in this case only CAPs with the same architecture as CAPsMAN will be upgraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#package_path WifiCapsman#package_path}
  */
  readonly packagePath?: string;
  /**
  * Require all connecting CAPs to have a valid certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#require_peer_certificate WifiCapsman#require_peer_certificate}
  */
  readonly requirePeerCertificate?: boolean | cdktf.IResolvable;
  /**
  * Upgrade policy options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#upgrade_policy WifiCapsman#upgrade_policy}
  */
  readonly upgradePolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman routeros_wifi_capsman}
*/
export class WifiCapsman extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_capsman";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiCapsman resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiCapsman to import
  * @param importFromId The id of the existing WifiCapsman that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiCapsman to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_capsman", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_capsman routeros_wifi_capsman} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiCapsmanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WifiCapsmanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_capsman',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._caCertificate = config.caCertificate;
    this._certificate = config.certificate;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interfaces = config.interfaces;
    this._packagePath = config.packagePath;
    this._requirePeerCertificate = config.requirePeerCertificate;
    this._upgradePolicy = config.upgradePolicy;
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

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // generated_ca_certificate - computed: true, optional: false, required: false
  public get generatedCaCertificate() {
    return this.getStringAttribute('generated_ca_certificate');
  }

  // generated_certificate - computed: true, optional: false, required: false
  public get generatedCertificate() {
    return this.getStringAttribute('generated_certificate');
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // package_path - computed: false, optional: true, required: false
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  public resetPackagePath() {
    this._packagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
  }

  // require_peer_certificate - computed: false, optional: true, required: false
  private _requirePeerCertificate?: boolean | cdktf.IResolvable; 
  public get requirePeerCertificate() {
    return this.getBooleanAttribute('require_peer_certificate');
  }
  public set requirePeerCertificate(value: boolean | cdktf.IResolvable) {
    this._requirePeerCertificate = value;
  }
  public resetRequirePeerCertificate() {
    this._requirePeerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePeerCertificateInput() {
    return this._requirePeerCertificate;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy?: string; 
  public get upgradePolicy() {
    return this.getStringAttribute('upgrade_policy');
  }
  public set upgradePolicy(value: string) {
    this._upgradePolicy = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      certificate: cdktf.stringToTerraform(this._certificate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      package_path: cdktf.stringToTerraform(this._packagePath),
      require_peer_certificate: cdktf.booleanToTerraform(this._requirePeerCertificate),
      upgrade_policy: cdktf.stringToTerraform(this._upgradePolicy),
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
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      package_path: {
        value: cdktf.stringToHclTerraform(this._packagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_peer_certificate: {
        value: cdktf.booleanToHclTerraform(this._requirePeerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_policy: {
        value: cdktf.stringToHclTerraform(this._upgradePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
