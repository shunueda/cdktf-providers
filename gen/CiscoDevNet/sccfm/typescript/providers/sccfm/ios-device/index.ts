// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IosDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Secure Device Connector (SDC) that will be used to communicate with the device. This value is not required if the connector type selected is Cloud Device Gateway (CDG).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#connector_name IosDevice#connector_name}
  */
  readonly connectorName: string;
  /**
  * Specify a set of grouped labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#grouped_labels IosDevice#grouped_labels}
  */
  readonly groupedLabels?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Set this attribute to true if you do not want CDO to validate the certificate of this device before onboarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#ignore_certificate IosDevice#ignore_certificate}
  */
  readonly ignoreCertificate: boolean | cdktf.IResolvable;
  /**
  * Specify a set of labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#labels IosDevice#labels}
  */
  readonly labels?: string[];
  /**
  * A human-readable name for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#name IosDevice#name}
  */
  readonly name: string;
  /**
  * The password used to authenticate with the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#password IosDevice#password}
  */
  readonly password: string;
  /**
  * The address of the device to onboard, specified in the format `host:port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#socket_address IosDevice#socket_address}
  */
  readonly socketAddress: string;
  /**
  * The username used to authenticate with the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#username IosDevice#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device sccfm_ios_device}
*/
export class IosDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_ios_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IosDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IosDevice to import
  * @param importFromId The id of the existing IosDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IosDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_ios_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ios_device sccfm_ios_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IosDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IosDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_ios_device',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorName = config.connectorName;
    this._groupedLabels = config.groupedLabels;
    this._ignoreCertificate = config.ignoreCertificate;
    this._labels = config.labels;
    this._name = config.name;
    this._password = config.password;
    this._socketAddress = config.socketAddress;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_name - computed: false, optional: false, required: true
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
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
      connector_name: cdktf.stringToTerraform(this._connectorName),
      grouped_labels: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._groupedLabels),
      ignore_certificate: cdktf.booleanToTerraform(this._ignoreCertificate),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      socket_address: cdktf.stringToTerraform(this._socketAddress),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_name: {
        value: cdktf.stringToHclTerraform(this._connectorName),
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
