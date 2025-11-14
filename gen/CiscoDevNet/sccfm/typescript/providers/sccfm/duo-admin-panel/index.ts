// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DuoAdminPanelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify a set of grouped labels to identify the Duo Admin Panel as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#grouped_labels DuoAdminPanel#grouped_labels}
  */
  readonly groupedLabels?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The API hostname for an Admin API application in the Duo Admin Panel. Refer to the SCC Firewall Manager documentation for details on how to create an Admin API application to onboard your Duo Admin Panel in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#host DuoAdminPanel#host}
  */
  readonly host: string;
  /**
  * The integration key for an Admin API application in the Duo Admin Panel. Refer to the SCC Firewall Manager documentation for details on how to create an Admin API application to onboard your Duo Admin Panel in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#integration_key DuoAdminPanel#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Specify a set of labels to identify the Duo Admin Panel as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#labels DuoAdminPanel#labels}
  */
  readonly labels?: string[];
  /**
  * A human-readable name for the Duo Admin Panel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#name DuoAdminPanel#name}
  */
  readonly name: string;
  /**
  * The secret key for an Admin API application in the Duo Admin Panel. Refer to the SCC Firewall Manager documentation for details on how to create an Admin API application to onboard your Duo Admin Panel in CDO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#secret_key DuoAdminPanel#secret_key}
  */
  readonly secretKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel sccfm_duo_admin_panel}
*/
export class DuoAdminPanel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_duo_admin_panel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DuoAdminPanel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DuoAdminPanel to import
  * @param importFromId The id of the existing DuoAdminPanel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DuoAdminPanel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_duo_admin_panel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.3.2/docs/resources/duo_admin_panel sccfm_duo_admin_panel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DuoAdminPanelConfig
  */
  public constructor(scope: Construct, id: string, config: DuoAdminPanelConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_duo_admin_panel',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupedLabels = config.groupedLabels;
    this._host = config.host;
    this._integrationKey = config.integrationKey;
    this._labels = config.labels;
    this._name = config.name;
    this._secretKey = config.secretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grouped_labels: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._groupedLabels),
      host: cdktf.stringToTerraform(this._host),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      secret_key: cdktf.stringToTerraform(this._secretKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grouped_labels: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._groupedLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
