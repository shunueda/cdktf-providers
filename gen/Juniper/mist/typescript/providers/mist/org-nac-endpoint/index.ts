// https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgNacEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#labels OrgNacEndpoint#labels}
  */
  readonly labels?: string[];
  /**
  * Only non-local-admin MAC is accepted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#mac OrgNacEndpoint#mac}
  */
  readonly mac: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#name OrgNacEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#notes OrgNacEndpoint#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#org_id OrgNacEndpoint#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#radius_group OrgNacEndpoint#radius_group}
  */
  readonly radiusGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#vlan OrgNacEndpoint#vlan}
  */
  readonly vlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint mist_org_nac_endpoint}
*/
export class OrgNacEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_nac_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgNacEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgNacEndpoint to import
  * @param importFromId The id of the existing OrgNacEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgNacEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_nac_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.3/docs/resources/org_nac_endpoint mist_org_nac_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgNacEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: OrgNacEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_nac_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._mac = config.mac;
    this._name = config.name;
    this._notes = config.notes;
    this._orgId = config.orgId;
    this._radiusGroup = config.radiusGroup;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // radius_group - computed: true, optional: true, required: false
  private _radiusGroup?: string; 
  public get radiusGroup() {
    return this.getStringAttribute('radius_group');
  }
  public set radiusGroup(value: string) {
    this._radiusGroup = value;
  }
  public resetRadiusGroup() {
    this._radiusGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupInput() {
    return this._radiusGroup;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      org_id: cdktf.stringToTerraform(this._orgId),
      radius_group: cdktf.stringToTerraform(this._radiusGroup),
      vlan: cdktf.stringToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_group: {
        value: cdktf.stringToHclTerraform(this._radiusGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
