// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#end_time_in_seconds MaintenanceWindow#end_time_in_seconds}
  */
  readonly endTimeInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#host_tag_group_host_names_group_anded MaintenanceWindow#host_tag_group_host_names_group_anded}
  */
  readonly hostTagGroupHostNamesGroupAnded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#id MaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#reason MaintenanceWindow#reason}
  */
  readonly reason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#relevant_customer_tags MaintenanceWindow#relevant_customer_tags}
  */
  readonly relevantCustomerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#relevant_host_names MaintenanceWindow#relevant_host_names}
  */
  readonly relevantHostNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#relevant_host_tags MaintenanceWindow#relevant_host_tags}
  */
  readonly relevantHostTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#relevant_host_tags_anded MaintenanceWindow#relevant_host_tags_anded}
  */
  readonly relevantHostTagsAnded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#start_time_in_seconds MaintenanceWindow#start_time_in_seconds}
  */
  readonly startTimeInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#title MaintenanceWindow#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window wavefront_maintenance_window}
*/
export class MaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaintenanceWindow to import
  * @param importFromId The id of the existing MaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/maintenance_window wavefront_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTimeInSeconds = config.endTimeInSeconds;
    this._hostTagGroupHostNamesGroupAnded = config.hostTagGroupHostNamesGroupAnded;
    this._id = config.id;
    this._reason = config.reason;
    this._relevantCustomerTags = config.relevantCustomerTags;
    this._relevantHostNames = config.relevantHostNames;
    this._relevantHostTags = config.relevantHostTags;
    this._relevantHostTagsAnded = config.relevantHostTagsAnded;
    this._startTimeInSeconds = config.startTimeInSeconds;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time_in_seconds - computed: false, optional: false, required: true
  private _endTimeInSeconds?: number; 
  public get endTimeInSeconds() {
    return this.getNumberAttribute('end_time_in_seconds');
  }
  public set endTimeInSeconds(value: number) {
    this._endTimeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInSecondsInput() {
    return this._endTimeInSeconds;
  }

  // host_tag_group_host_names_group_anded - computed: false, optional: true, required: false
  private _hostTagGroupHostNamesGroupAnded?: boolean | cdktf.IResolvable; 
  public get hostTagGroupHostNamesGroupAnded() {
    return this.getBooleanAttribute('host_tag_group_host_names_group_anded');
  }
  public set hostTagGroupHostNamesGroupAnded(value: boolean | cdktf.IResolvable) {
    this._hostTagGroupHostNamesGroupAnded = value;
  }
  public resetHostTagGroupHostNamesGroupAnded() {
    this._hostTagGroupHostNamesGroupAnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTagGroupHostNamesGroupAndedInput() {
    return this._hostTagGroupHostNamesGroupAnded;
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

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // relevant_customer_tags - computed: false, optional: true, required: false
  private _relevantCustomerTags?: string[]; 
  public get relevantCustomerTags() {
    return cdktf.Fn.tolist(this.getListAttribute('relevant_customer_tags'));
  }
  public set relevantCustomerTags(value: string[]) {
    this._relevantCustomerTags = value;
  }
  public resetRelevantCustomerTags() {
    this._relevantCustomerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantCustomerTagsInput() {
    return this._relevantCustomerTags;
  }

  // relevant_host_names - computed: false, optional: true, required: false
  private _relevantHostNames?: string[]; 
  public get relevantHostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('relevant_host_names'));
  }
  public set relevantHostNames(value: string[]) {
    this._relevantHostNames = value;
  }
  public resetRelevantHostNames() {
    this._relevantHostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantHostNamesInput() {
    return this._relevantHostNames;
  }

  // relevant_host_tags - computed: false, optional: true, required: false
  private _relevantHostTags?: string[]; 
  public get relevantHostTags() {
    return cdktf.Fn.tolist(this.getListAttribute('relevant_host_tags'));
  }
  public set relevantHostTags(value: string[]) {
    this._relevantHostTags = value;
  }
  public resetRelevantHostTags() {
    this._relevantHostTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantHostTagsInput() {
    return this._relevantHostTags;
  }

  // relevant_host_tags_anded - computed: false, optional: true, required: false
  private _relevantHostTagsAnded?: boolean | cdktf.IResolvable; 
  public get relevantHostTagsAnded() {
    return this.getBooleanAttribute('relevant_host_tags_anded');
  }
  public set relevantHostTagsAnded(value: boolean | cdktf.IResolvable) {
    this._relevantHostTagsAnded = value;
  }
  public resetRelevantHostTagsAnded() {
    this._relevantHostTagsAnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevantHostTagsAndedInput() {
    return this._relevantHostTagsAnded;
  }

  // start_time_in_seconds - computed: false, optional: false, required: true
  private _startTimeInSeconds?: number; 
  public get startTimeInSeconds() {
    return this.getNumberAttribute('start_time_in_seconds');
  }
  public set startTimeInSeconds(value: number) {
    this._startTimeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInSecondsInput() {
    return this._startTimeInSeconds;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time_in_seconds: cdktf.numberToTerraform(this._endTimeInSeconds),
      host_tag_group_host_names_group_anded: cdktf.booleanToTerraform(this._hostTagGroupHostNamesGroupAnded),
      id: cdktf.stringToTerraform(this._id),
      reason: cdktf.stringToTerraform(this._reason),
      relevant_customer_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relevantCustomerTags),
      relevant_host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relevantHostNames),
      relevant_host_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relevantHostTags),
      relevant_host_tags_anded: cdktf.booleanToTerraform(this._relevantHostTagsAnded),
      start_time_in_seconds: cdktf.numberToTerraform(this._startTimeInSeconds),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time_in_seconds: {
        value: cdktf.numberToHclTerraform(this._endTimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_tag_group_host_names_group_anded: {
        value: cdktf.booleanToHclTerraform(this._hostTagGroupHostNamesGroupAnded),
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
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relevant_customer_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relevantCustomerTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relevant_host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relevantHostNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relevant_host_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relevantHostTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relevant_host_tags_anded: {
        value: cdktf.booleanToHclTerraform(this._relevantHostTagsAnded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time_in_seconds: {
        value: cdktf.numberToHclTerraform(this._startTimeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
