// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaBandwidthClassesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The file size for a bandwidth class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes#file_size DataZiaBandwidthClasses#file_size}
  */
  readonly fileSize?: string;
  /**
  * The unique identifier for the bandwidth class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes#id DataZiaBandwidthClasses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the bandwidth class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes#name DataZiaBandwidthClasses#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes zia_bandwidth_classes}
*/
export class DataZiaBandwidthClasses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_bandwidth_classes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaBandwidthClasses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaBandwidthClasses to import
  * @param importFromId The id of the existing DataZiaBandwidthClasses that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaBandwidthClasses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_bandwidth_classes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/data-sources/bandwidth_classes zia_bandwidth_classes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaBandwidthClassesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaBandwidthClassesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_bandwidth_classes',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileSize = config.fileSize;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_service_groups - computed: true, optional: false, required: false
  public get applicationServiceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('application_service_groups'));
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: string; 
  public get fileSize() {
    return this.getStringAttribute('file_size');
  }
  public set fileSize(value: string) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_name_l10n_tag - computed: true, optional: false, required: false
  public get isNameL10NTag() {
    return this.getBooleanAttribute('is_name_l10n_tag');
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

  // network_applications - computed: true, optional: false, required: false
  public get networkApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('network_applications'));
  }

  // network_services - computed: true, optional: false, required: false
  public get networkServices() {
    return cdktf.Fn.tolist(this.getListAttribute('network_services'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url_categories - computed: true, optional: false, required: false
  public get urlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_categories'));
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return cdktf.Fn.tolist(this.getListAttribute('urls'));
  }

  // web_applications - computed: true, optional: false, required: false
  public get webApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('web_applications'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_size: cdktf.stringToTerraform(this._fileSize),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_size: {
        value: cdktf.stringToHclTerraform(this._fileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
