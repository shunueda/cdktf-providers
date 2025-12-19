// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDnsLabelCountFilterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#dns_name SlbTemplateDnsLabelCountFilterA#dns_name}
  */
  readonly dnsName: string;
  /**
  * enable the log when hit the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#drop_log_enable SlbTemplateDnsLabelCountFilterA#drop_log_enable}
  */
  readonly dropLogEnable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#id SlbTemplateDnsLabelCountFilterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': drop; 'ignore': ignore;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#label_count_filter_action SlbTemplateDnsLabelCountFilterA#label_count_filter_action}
  */
  readonly labelCountFilterAction?: string;
  /**
  * Maximum number of FQDN labels per FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#max_fqdn_label_count SlbTemplateDnsLabelCountFilterA#max_fqdn_label_count}
  */
  readonly maxFqdnLabelCount?: number;
  /**
  * Minimum number of FQDN labels per FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#min_fqdn_label_count SlbTemplateDnsLabelCountFilterA#min_fqdn_label_count}
  */
  readonly minFqdnLabelCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#uuid SlbTemplateDnsLabelCountFilterA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter thunder_slb_template_dns_label_count_filter}
*/
export class SlbTemplateDnsLabelCountFilterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dns_label_count_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDnsLabelCountFilterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDnsLabelCountFilterA to import
  * @param importFromId The id of the existing SlbTemplateDnsLabelCountFilterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDnsLabelCountFilterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dns_label_count_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dns_label_count_filter thunder_slb_template_dns_label_count_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDnsLabelCountFilterAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDnsLabelCountFilterAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dns_label_count_filter',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsName = config.dnsName;
    this._dropLogEnable = config.dropLogEnable;
    this._id = config.id;
    this._labelCountFilterAction = config.labelCountFilterAction;
    this._maxFqdnLabelCount = config.maxFqdnLabelCount;
    this._minFqdnLabelCount = config.minFqdnLabelCount;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // drop_log_enable - computed: false, optional: true, required: false
  private _dropLogEnable?: number; 
  public get dropLogEnable() {
    return this.getNumberAttribute('drop_log_enable');
  }
  public set dropLogEnable(value: number) {
    this._dropLogEnable = value;
  }
  public resetDropLogEnable() {
    this._dropLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropLogEnableInput() {
    return this._dropLogEnable;
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

  // label_count_filter_action - computed: false, optional: true, required: false
  private _labelCountFilterAction?: string; 
  public get labelCountFilterAction() {
    return this.getStringAttribute('label_count_filter_action');
  }
  public set labelCountFilterAction(value: string) {
    this._labelCountFilterAction = value;
  }
  public resetLabelCountFilterAction() {
    this._labelCountFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelCountFilterActionInput() {
    return this._labelCountFilterAction;
  }

  // max_fqdn_label_count - computed: false, optional: true, required: false
  private _maxFqdnLabelCount?: number; 
  public get maxFqdnLabelCount() {
    return this.getNumberAttribute('max_fqdn_label_count');
  }
  public set maxFqdnLabelCount(value: number) {
    this._maxFqdnLabelCount = value;
  }
  public resetMaxFqdnLabelCount() {
    this._maxFqdnLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFqdnLabelCountInput() {
    return this._maxFqdnLabelCount;
  }

  // min_fqdn_label_count - computed: false, optional: true, required: false
  private _minFqdnLabelCount?: number; 
  public get minFqdnLabelCount() {
    return this.getNumberAttribute('min_fqdn_label_count');
  }
  public set minFqdnLabelCount(value: number) {
    this._minFqdnLabelCount = value;
  }
  public resetMinFqdnLabelCount() {
    this._minFqdnLabelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFqdnLabelCountInput() {
    return this._minFqdnLabelCount;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      drop_log_enable: cdktf.numberToTerraform(this._dropLogEnable),
      id: cdktf.stringToTerraform(this._id),
      label_count_filter_action: cdktf.stringToTerraform(this._labelCountFilterAction),
      max_fqdn_label_count: cdktf.numberToTerraform(this._maxFqdnLabelCount),
      min_fqdn_label_count: cdktf.numberToTerraform(this._minFqdnLabelCount),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_log_enable: {
        value: cdktf.numberToHclTerraform(this._dropLogEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_count_filter_action: {
        value: cdktf.stringToHclTerraform(this._labelCountFilterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_fqdn_label_count: {
        value: cdktf.numberToHclTerraform(this._maxFqdnLabelCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_fqdn_label_count: {
        value: cdktf.numberToHclTerraform(this._minFqdnLabelCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
