// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtelMetricsIngestionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#id OtelMetricsIngestion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * resource_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#resource_attributes OtelMetricsIngestion#resource_attributes}
  */
  readonly resourceAttributes?: OtelMetricsIngestionResourceAttributes;
}
export interface OtelMetricsIngestionResourceAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#exclude_keys OtelMetricsIngestion#exclude_keys}
  */
  readonly excludeKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#filter_mode OtelMetricsIngestion#filter_mode}
  */
  readonly filterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#flatten_mode OtelMetricsIngestion#flatten_mode}
  */
  readonly flattenMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#generate_target_info OtelMetricsIngestion#generate_target_info}
  */
  readonly generateTargetInfo?: boolean | cdktf.IResolvable;
}

export function otelMetricsIngestionResourceAttributesToTerraform(struct?: OtelMetricsIngestionResourceAttributesOutputReference | OtelMetricsIngestionResourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeKeys),
    filter_mode: cdktf.stringToTerraform(struct!.filterMode),
    flatten_mode: cdktf.stringToTerraform(struct!.flattenMode),
    generate_target_info: cdktf.booleanToTerraform(struct!.generateTargetInfo),
  }
}


export function otelMetricsIngestionResourceAttributesToHclTerraform(struct?: OtelMetricsIngestionResourceAttributesOutputReference | OtelMetricsIngestionResourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_mode: {
      value: cdktf.stringToHclTerraform(struct!.filterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flatten_mode: {
      value: cdktf.stringToHclTerraform(struct!.flattenMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_target_info: {
      value: cdktf.booleanToHclTerraform(struct!.generateTargetInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtelMetricsIngestionResourceAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OtelMetricsIngestionResourceAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeKeys = this._excludeKeys;
    }
    if (this._filterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMode = this._filterMode;
    }
    if (this._flattenMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenMode = this._flattenMode;
    }
    if (this._generateTargetInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateTargetInfo = this._generateTargetInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtelMetricsIngestionResourceAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeKeys = undefined;
      this._filterMode = undefined;
      this._flattenMode = undefined;
      this._generateTargetInfo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeKeys = value.excludeKeys;
      this._filterMode = value.filterMode;
      this._flattenMode = value.flattenMode;
      this._generateTargetInfo = value.generateTargetInfo;
    }
  }

  // exclude_keys - computed: false, optional: true, required: false
  private _excludeKeys?: string[]; 
  public get excludeKeys() {
    return this.getListAttribute('exclude_keys');
  }
  public set excludeKeys(value: string[]) {
    this._excludeKeys = value;
  }
  public resetExcludeKeys() {
    this._excludeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeKeysInput() {
    return this._excludeKeys;
  }

  // filter_mode - computed: false, optional: true, required: false
  private _filterMode?: string; 
  public get filterMode() {
    return this.getStringAttribute('filter_mode');
  }
  public set filterMode(value: string) {
    this._filterMode = value;
  }
  public resetFilterMode() {
    this._filterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModeInput() {
    return this._filterMode;
  }

  // flatten_mode - computed: false, optional: true, required: false
  private _flattenMode?: string; 
  public get flattenMode() {
    return this.getStringAttribute('flatten_mode');
  }
  public set flattenMode(value: string) {
    this._flattenMode = value;
  }
  public resetFlattenMode() {
    this._flattenMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenModeInput() {
    return this._flattenMode;
  }

  // generate_target_info - computed: false, optional: true, required: false
  private _generateTargetInfo?: boolean | cdktf.IResolvable; 
  public get generateTargetInfo() {
    return this.getBooleanAttribute('generate_target_info');
  }
  public set generateTargetInfo(value: boolean | cdktf.IResolvable) {
    this._generateTargetInfo = value;
  }
  public resetGenerateTargetInfo() {
    this._generateTargetInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTargetInfoInput() {
    return this._generateTargetInfo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion chronosphere_otel_metrics_ingestion}
*/
export class OtelMetricsIngestion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_otel_metrics_ingestion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtelMetricsIngestion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtelMetricsIngestion to import
  * @param importFromId The id of the existing OtelMetricsIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtelMetricsIngestion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_otel_metrics_ingestion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/otel_metrics_ingestion chronosphere_otel_metrics_ingestion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtelMetricsIngestionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OtelMetricsIngestionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_otel_metrics_ingestion',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
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
    this._resourceAttributes.internalValue = config.resourceAttributes;
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

  // resource_attributes - computed: false, optional: true, required: false
  private _resourceAttributes = new OtelMetricsIngestionResourceAttributesOutputReference(this, "resource_attributes");
  public get resourceAttributes() {
    return this._resourceAttributes;
  }
  public putResourceAttributes(value: OtelMetricsIngestionResourceAttributes) {
    this._resourceAttributes.internalValue = value;
  }
  public resetResourceAttributes() {
    this._resourceAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributesInput() {
    return this._resourceAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_attributes: otelMetricsIngestionResourceAttributesToTerraform(this._resourceAttributes.internalValue),
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
      resource_attributes: {
        value: otelMetricsIngestionResourceAttributesToHclTerraform(this._resourceAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtelMetricsIngestionResourceAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
