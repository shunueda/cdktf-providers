// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IbmMqFiltersConfig extends cdktf.TerraformMetaArguments {
  /**
  * CICS: Excluded MQ queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#cics_mq_queue_id_excludes IbmMqFilters#cics_mq_queue_id_excludes}
  */
  readonly cicsMqQueueIdExcludes?: string[];
  /**
  * CICS: Included MQ queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#cics_mq_queue_id_includes IbmMqFilters#cics_mq_queue_id_includes}
  */
  readonly cicsMqQueueIdIncludes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#id IbmMqFilters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When you add a transaction ID to the exclude list remaining transactions are still monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#ims_cr_trn_id_excludes IbmMqFilters#ims_cr_trn_id_excludes}
  */
  readonly imsCrTrnIdExcludes?: string[];
  /**
  * When you add a transaction ID to the include list, all the remaining transactions are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#ims_cr_trn_id_includes IbmMqFilters#ims_cr_trn_id_includes}
  */
  readonly imsCrTrnIdIncludes?: string[];
  /**
  * IMS: Excluded MQ queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#ims_mq_queue_id_excludes IbmMqFilters#ims_mq_queue_id_excludes}
  */
  readonly imsMqQueueIdExcludes?: string[];
  /**
  * IMS: Included MQ queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#ims_mq_queue_id_includes IbmMqFilters#ims_mq_queue_id_includes}
  */
  readonly imsMqQueueIdIncludes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters dynatrace_ibm_mq_filters}
*/
export class IbmMqFilters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_ibm_mq_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IbmMqFilters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IbmMqFilters to import
  * @param importFromId The id of the existing IbmMqFilters that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IbmMqFilters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_ibm_mq_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/ibm_mq_filters dynatrace_ibm_mq_filters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IbmMqFiltersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IbmMqFiltersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_ibm_mq_filters',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cicsMqQueueIdExcludes = config.cicsMqQueueIdExcludes;
    this._cicsMqQueueIdIncludes = config.cicsMqQueueIdIncludes;
    this._id = config.id;
    this._imsCrTrnIdExcludes = config.imsCrTrnIdExcludes;
    this._imsCrTrnIdIncludes = config.imsCrTrnIdIncludes;
    this._imsMqQueueIdExcludes = config.imsMqQueueIdExcludes;
    this._imsMqQueueIdIncludes = config.imsMqQueueIdIncludes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cics_mq_queue_id_excludes - computed: false, optional: true, required: false
  private _cicsMqQueueIdExcludes?: string[]; 
  public get cicsMqQueueIdExcludes() {
    return cdktf.Fn.tolist(this.getListAttribute('cics_mq_queue_id_excludes'));
  }
  public set cicsMqQueueIdExcludes(value: string[]) {
    this._cicsMqQueueIdExcludes = value;
  }
  public resetCicsMqQueueIdExcludes() {
    this._cicsMqQueueIdExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsMqQueueIdExcludesInput() {
    return this._cicsMqQueueIdExcludes;
  }

  // cics_mq_queue_id_includes - computed: false, optional: true, required: false
  private _cicsMqQueueIdIncludes?: string[]; 
  public get cicsMqQueueIdIncludes() {
    return cdktf.Fn.tolist(this.getListAttribute('cics_mq_queue_id_includes'));
  }
  public set cicsMqQueueIdIncludes(value: string[]) {
    this._cicsMqQueueIdIncludes = value;
  }
  public resetCicsMqQueueIdIncludes() {
    this._cicsMqQueueIdIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsMqQueueIdIncludesInput() {
    return this._cicsMqQueueIdIncludes;
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

  // ims_cr_trn_id_excludes - computed: false, optional: true, required: false
  private _imsCrTrnIdExcludes?: string[]; 
  public get imsCrTrnIdExcludes() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_cr_trn_id_excludes'));
  }
  public set imsCrTrnIdExcludes(value: string[]) {
    this._imsCrTrnIdExcludes = value;
  }
  public resetImsCrTrnIdExcludes() {
    this._imsCrTrnIdExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsCrTrnIdExcludesInput() {
    return this._imsCrTrnIdExcludes;
  }

  // ims_cr_trn_id_includes - computed: false, optional: true, required: false
  private _imsCrTrnIdIncludes?: string[]; 
  public get imsCrTrnIdIncludes() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_cr_trn_id_includes'));
  }
  public set imsCrTrnIdIncludes(value: string[]) {
    this._imsCrTrnIdIncludes = value;
  }
  public resetImsCrTrnIdIncludes() {
    this._imsCrTrnIdIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsCrTrnIdIncludesInput() {
    return this._imsCrTrnIdIncludes;
  }

  // ims_mq_queue_id_excludes - computed: false, optional: true, required: false
  private _imsMqQueueIdExcludes?: string[]; 
  public get imsMqQueueIdExcludes() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_mq_queue_id_excludes'));
  }
  public set imsMqQueueIdExcludes(value: string[]) {
    this._imsMqQueueIdExcludes = value;
  }
  public resetImsMqQueueIdExcludes() {
    this._imsMqQueueIdExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsMqQueueIdExcludesInput() {
    return this._imsMqQueueIdExcludes;
  }

  // ims_mq_queue_id_includes - computed: false, optional: true, required: false
  private _imsMqQueueIdIncludes?: string[]; 
  public get imsMqQueueIdIncludes() {
    return cdktf.Fn.tolist(this.getListAttribute('ims_mq_queue_id_includes'));
  }
  public set imsMqQueueIdIncludes(value: string[]) {
    this._imsMqQueueIdIncludes = value;
  }
  public resetImsMqQueueIdIncludes() {
    this._imsMqQueueIdIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsMqQueueIdIncludesInput() {
    return this._imsMqQueueIdIncludes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cics_mq_queue_id_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cicsMqQueueIdExcludes),
      cics_mq_queue_id_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cicsMqQueueIdIncludes),
      id: cdktf.stringToTerraform(this._id),
      ims_cr_trn_id_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsCrTrnIdExcludes),
      ims_cr_trn_id_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsCrTrnIdIncludes),
      ims_mq_queue_id_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsMqQueueIdExcludes),
      ims_mq_queue_id_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imsMqQueueIdIncludes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cics_mq_queue_id_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cicsMqQueueIdExcludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cics_mq_queue_id_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cicsMqQueueIdIncludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ims_cr_trn_id_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsCrTrnIdExcludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ims_cr_trn_id_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsCrTrnIdIncludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ims_mq_queue_id_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsMqQueueIdExcludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ims_mq_queue_id_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imsMqQueueIdIncludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
