// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#id Reportprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#max_concurrent_reports Reportprofile#max_concurrent_reports}
  */
  readonly maxConcurrentReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#uuid Reportprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * collection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#collection_rules Reportprofile#collection_rules}
  */
  readonly collectionRules?: ReportprofileCollectionRules[] | cdktf.IResolvable;
}
export interface ReportprofileCollectionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#enforced_report_period Reportprofile#enforced_report_period}
  */
  readonly enforcedReportPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#enforced_report_samples Reportprofile#enforced_report_samples}
  */
  readonly enforcedReportSamples?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#max_concurrent_workers Reportprofile#max_concurrent_workers}
  */
  readonly maxConcurrentWorkers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#min_free_disk_required Reportprofile#min_free_disk_required}
  */
  readonly minFreeDiskRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#timeout Reportprofile#timeout}
  */
  readonly timeout?: string;
}

export function reportprofileCollectionRulesToTerraform(struct?: ReportprofileCollectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced_report_period: cdktf.stringToTerraform(struct!.enforcedReportPeriod),
    enforced_report_samples: cdktf.stringToTerraform(struct!.enforcedReportSamples),
    max_concurrent_workers: cdktf.stringToTerraform(struct!.maxConcurrentWorkers),
    min_free_disk_required: cdktf.stringToTerraform(struct!.minFreeDiskRequired),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function reportprofileCollectionRulesToHclTerraform(struct?: ReportprofileCollectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforced_report_period: {
      value: cdktf.stringToHclTerraform(struct!.enforcedReportPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_report_samples: {
      value: cdktf.stringToHclTerraform(struct!.enforcedReportSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_workers: {
      value: cdktf.stringToHclTerraform(struct!.maxConcurrentWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_free_disk_required: {
      value: cdktf.stringToHclTerraform(struct!.minFreeDiskRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportprofileCollectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReportprofileCollectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcedReportPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedReportPeriod = this._enforcedReportPeriod;
    }
    if (this._enforcedReportSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedReportSamples = this._enforcedReportSamples;
    }
    if (this._maxConcurrentWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentWorkers = this._maxConcurrentWorkers;
    }
    if (this._minFreeDiskRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFreeDiskRequired = this._minFreeDiskRequired;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportprofileCollectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcedReportPeriod = undefined;
      this._enforcedReportSamples = undefined;
      this._maxConcurrentWorkers = undefined;
      this._minFreeDiskRequired = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcedReportPeriod = value.enforcedReportPeriod;
      this._enforcedReportSamples = value.enforcedReportSamples;
      this._maxConcurrentWorkers = value.maxConcurrentWorkers;
      this._minFreeDiskRequired = value.minFreeDiskRequired;
      this._timeout = value.timeout;
    }
  }

  // enforced_report_period - computed: false, optional: true, required: false
  private _enforcedReportPeriod?: string; 
  public get enforcedReportPeriod() {
    return this.getStringAttribute('enforced_report_period');
  }
  public set enforcedReportPeriod(value: string) {
    this._enforcedReportPeriod = value;
  }
  public resetEnforcedReportPeriod() {
    this._enforcedReportPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedReportPeriodInput() {
    return this._enforcedReportPeriod;
  }

  // enforced_report_samples - computed: false, optional: true, required: false
  private _enforcedReportSamples?: string; 
  public get enforcedReportSamples() {
    return this.getStringAttribute('enforced_report_samples');
  }
  public set enforcedReportSamples(value: string) {
    this._enforcedReportSamples = value;
  }
  public resetEnforcedReportSamples() {
    this._enforcedReportSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedReportSamplesInput() {
    return this._enforcedReportSamples;
  }

  // max_concurrent_workers - computed: false, optional: true, required: false
  private _maxConcurrentWorkers?: string; 
  public get maxConcurrentWorkers() {
    return this.getStringAttribute('max_concurrent_workers');
  }
  public set maxConcurrentWorkers(value: string) {
    this._maxConcurrentWorkers = value;
  }
  public resetMaxConcurrentWorkers() {
    this._maxConcurrentWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentWorkersInput() {
    return this._maxConcurrentWorkers;
  }

  // min_free_disk_required - computed: false, optional: true, required: false
  private _minFreeDiskRequired?: string; 
  public get minFreeDiskRequired() {
    return this.getStringAttribute('min_free_disk_required');
  }
  public set minFreeDiskRequired(value: string) {
    this._minFreeDiskRequired = value;
  }
  public resetMinFreeDiskRequired() {
    this._minFreeDiskRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreeDiskRequiredInput() {
    return this._minFreeDiskRequired;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class ReportprofileCollectionRulesList extends cdktf.ComplexList {
  public internalValue? : ReportprofileCollectionRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReportprofileCollectionRulesOutputReference {
    return new ReportprofileCollectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile avi_reportprofile}
*/
export class Reportprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_reportprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Reportprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Reportprofile to import
  * @param importFromId The id of the existing Reportprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Reportprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_reportprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/reportprofile avi_reportprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_reportprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maxConcurrentReports = config.maxConcurrentReports;
    this._uuid = config.uuid;
    this._collectionRules.internalValue = config.collectionRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_concurrent_reports - computed: false, optional: true, required: false
  private _maxConcurrentReports?: string; 
  public get maxConcurrentReports() {
    return this.getStringAttribute('max_concurrent_reports');
  }
  public set maxConcurrentReports(value: string) {
    this._maxConcurrentReports = value;
  }
  public resetMaxConcurrentReports() {
    this._maxConcurrentReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentReportsInput() {
    return this._maxConcurrentReports;
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

  // collection_rules - computed: false, optional: true, required: false
  private _collectionRules = new ReportprofileCollectionRulesList(this, "collection_rules", true);
  public get collectionRules() {
    return this._collectionRules;
  }
  public putCollectionRules(value: ReportprofileCollectionRules[] | cdktf.IResolvable) {
    this._collectionRules.internalValue = value;
  }
  public resetCollectionRules() {
    this._collectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionRulesInput() {
    return this._collectionRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_reports: cdktf.stringToTerraform(this._maxConcurrentReports),
      uuid: cdktf.stringToTerraform(this._uuid),
      collection_rules: cdktf.listMapper(reportprofileCollectionRulesToTerraform, true)(this._collectionRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_reports: {
        value: cdktf.stringToHclTerraform(this._maxConcurrentReports),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_rules: {
        value: cdktf.listMapperHcl(reportprofileCollectionRulesToHclTerraform, true)(this._collectionRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ReportprofileCollectionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
