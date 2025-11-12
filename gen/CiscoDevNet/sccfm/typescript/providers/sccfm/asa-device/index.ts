// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsaDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The version of the ASDM on the ASA device. If this attribute is set during resource creation and the version of ASDM on the ASA is not the same as that specified, resource creation will fail. If the version attribute is updated following the creation of a resource, the CDO terraform provider will attempt to upgrade the ASDM on the device to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#asdm_version AsaDevice#asdm_version}
  */
  readonly asdmVersion?: string;
  /**
  * The name of the Secure Device Connector (SDC) that will be used to communicate with the device. This value is not required if the connector type selected is Cloud Connector (CDG).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#connector_name AsaDevice#connector_name}
  */
  readonly connectorName?: string;
  /**
  * The type of the connector that will be used to communicate with the device. CDO can communicate with your device using either a Cloud Connector (CDG) or a Secure Device Connector (SDC); see [the SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/c-connect-cisco-defense-orchestratortor-the-secure-device-connector.html) to learn more (Valid values: [CDG, SDC]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#connector_type AsaDevice#connector_type}
  */
  readonly connectorType: string;
  /**
  * Specify a map of grouped labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#grouped_labels AsaDevice#grouped_labels}
  */
  readonly groupedLabels?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Set this attribute to true if you do not want CDO to validate the certificate of this device before onboarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#ignore_certificate AsaDevice#ignore_certificate}
  */
  readonly ignoreCertificate: boolean | cdktf.IResolvable;
  /**
  * Specify a set of labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#labels AsaDevice#labels}
  */
  readonly labels?: string[];
  /**
  * A human-readable name for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#name AsaDevice#name}
  */
  readonly name: string;
  /**
  * The password used to authenticate with the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#password AsaDevice#password}
  */
  readonly password: string;
  /**
  * The address of the device to onboard, specified in the format `host:port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#socket_address AsaDevice#socket_address}
  */
  readonly socketAddress: string;
  /**
  * The version of the ASA device. If this attribute is set during resource creation and the version of the ASA is not the same as that specified, resource creation will fail. If the version attribute is updated following the creation of a resource, the CDO terraform provider will attempt to upgrade the device to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#software_version AsaDevice#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * The username used to authenticate with the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#username AsaDevice#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device sccfm_asa_device}
*/
export class AsaDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_asa_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsaDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsaDevice to import
  * @param importFromId The id of the existing AsaDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsaDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_asa_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/asa_device sccfm_asa_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsaDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: AsaDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_asa_device',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5',
        providerVersionConstraint: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asdmVersion = config.asdmVersion;
    this._connectorName = config.connectorName;
    this._connectorType = config.connectorType;
    this._groupedLabels = config.groupedLabels;
    this._ignoreCertificate = config.ignoreCertificate;
    this._labels = config.labels;
    this._name = config.name;
    this._password = config.password;
    this._socketAddress = config.socketAddress;
    this._softwareVersion = config.softwareVersion;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asdm_version - computed: true, optional: true, required: false
  private _asdmVersion?: string; 
  public get asdmVersion() {
    return this.getStringAttribute('asdm_version');
  }
  public set asdmVersion(value: string) {
    this._asdmVersion = value;
  }
  public resetAsdmVersion() {
    this._asdmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asdmVersionInput() {
    return this._asdmVersion;
  }

  // connector_name - computed: false, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // grouped_labels - computed: true, optional: true, required: false
  private _groupedLabels?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get groupedLabels() {
    return this.interpolationForAttribute('grouped_labels');
  }
  public set groupedLabels(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._groupedLabels = value;
  }
  public resetGroupedLabels() {
    this._groupedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupedLabelsInput() {
    return this._groupedLabels;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_certificate - computed: false, optional: false, required: true
  private _ignoreCertificate?: boolean | cdktf.IResolvable; 
  public get ignoreCertificate() {
    return this.getBooleanAttribute('ignore_certificate');
  }
  public set ignoreCertificate(value: boolean | cdktf.IResolvable) {
    this._ignoreCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertificateInput() {
    return this._ignoreCertificate;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // socket_address - computed: false, optional: false, required: true
  private _socketAddress?: string; 
  public get socketAddress() {
    return this.getStringAttribute('socket_address');
  }
  public set socketAddress(value: string) {
    this._socketAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress;
  }

  // software_version - computed: true, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
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
      asdm_version: cdktf.stringToTerraform(this._asdmVersion),
      connector_name: cdktf.stringToTerraform(this._connectorName),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      grouped_labels: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._groupedLabels),
      ignore_certificate: cdktf.booleanToTerraform(this._ignoreCertificate),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      socket_address: cdktf.stringToTerraform(this._socketAddress),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asdm_version: {
        value: cdktf.stringToHclTerraform(this._asdmVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_name: {
        value: cdktf.stringToHclTerraform(this._connectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grouped_labels: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._groupedLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      ignore_certificate: {
        value: cdktf.booleanToHclTerraform(this._ignoreCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      socket_address: {
        value: cdktf.stringToHclTerraform(this._socketAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
