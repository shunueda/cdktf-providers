// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FtdDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cloud-Delivered FMC (cdFMC) access policy that will be used by the FTD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#access_policy_name FtdDevice#access_policy_name}
  */
  readonly accessPolicyName: string;
  /**
  * Specify a map of grouped labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in SCC Firewall Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#grouped_labels FtdDevice#grouped_labels}
  */
  readonly groupedLabels?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Specify a set of labels to identify the device as part of a group. Refer to the [SCC Firewall Manager documentation](https://docs.manage.security.cisco.com/t-applying-labels-to-devices-and-objects.html#!c-labels-and-filtering.html) for details on how labels are used in SCC Firewall Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#labels FtdDevice#labels}
  */
  readonly labels?: string[];
  /**
  * Comma-separated list of licenses to apply to this FTD. You must enable at least the "BASE" license. Allowed values are: ["BASE", "CARRIER", "THREAT", "MALWARE", "URLFilter",].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#licenses FtdDevice#licenses}
  */
  readonly licenses: string[];
  /**
  * A human-readable name for the Firewall Threat Defense (FTD). This name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#name FtdDevice#name}
  */
  readonly name: string;
  /**
  * The performance tier of the virtual FTD, if virtual is set to false, this field is ignored as performance tiers are not applicable to physical FTD devices. Allowed values are: ["FTDv5", "FTDv10", "FTDv20", "FTDv30", "FTDv50", "FTDv100", "FTDv"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#performance_tier FtdDevice#performance_tier}
  */
  readonly performanceTier?: string;
  /**
  * This determines if this FTD is virtual. If false, performance_tier is ignored as performance tiers are not applicable to physical FTD devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#virtual FtdDevice#virtual}
  */
  readonly virtual: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device sccfm_ftd_device}
*/
export class FtdDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_ftd_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FtdDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FtdDevice to import
  * @param importFromId The id of the existing FtdDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FtdDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_ftd_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/ftd_device sccfm_ftd_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FtdDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: FtdDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_ftd_device',
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
    this._accessPolicyName = config.accessPolicyName;
    this._groupedLabels = config.groupedLabels;
    this._labels = config.labels;
    this._licenses = config.licenses;
    this._name = config.name;
    this._performanceTier = config.performanceTier;
    this._virtual = config.virtual;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }

  // access_policy_name - computed: false, optional: false, required: true
  private _accessPolicyName?: string; 
  public get accessPolicyName() {
    return this.getStringAttribute('access_policy_name');
  }
  public set accessPolicyName(value: string) {
    this._accessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyNameInput() {
    return this._accessPolicyName;
  }

  // generated_command - computed: true, optional: false, required: false
  public get generatedCommand() {
    return this.getStringAttribute('generated_command');
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // licenses - computed: false, optional: false, required: true
  private _licenses?: string[]; 
  public get licenses() {
    return cdktf.Fn.tolist(this.getListAttribute('licenses'));
  }
  public set licenses(value: string[]) {
    this._licenses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
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

  // nat_id - computed: true, optional: false, required: false
  public get natId() {
    return this.getStringAttribute('nat_id');
  }

  // performance_tier - computed: false, optional: true, required: false
  private _performanceTier?: string; 
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }
  public set performanceTier(value: string) {
    this._performanceTier = value;
  }
  public resetPerformanceTier() {
    this._performanceTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTierInput() {
    return this._performanceTier;
  }

  // reg_key - computed: true, optional: false, required: false
  public get regKey() {
    return this.getStringAttribute('reg_key');
  }

  // virtual - computed: false, optional: false, required: true
  private _virtual?: boolean | cdktf.IResolvable; 
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }
  public set virtual(value: boolean | cdktf.IResolvable) {
    this._virtual = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_name: cdktf.stringToTerraform(this._accessPolicyName),
      grouped_labels: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._groupedLabels),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenses),
      name: cdktf.stringToTerraform(this._name),
      performance_tier: cdktf.stringToTerraform(this._performanceTier),
      virtual: cdktf.booleanToTerraform(this._virtual),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_name: {
        value: cdktf.stringToHclTerraform(this._accessPolicyName),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenses),
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
      performance_tier: {
        value: cdktf.stringToHclTerraform(this._performanceTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual: {
        value: cdktf.booleanToHclTerraform(this._virtual),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
