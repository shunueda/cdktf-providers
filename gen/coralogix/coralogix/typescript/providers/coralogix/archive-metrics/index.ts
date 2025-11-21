// https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#ibm ArchiveMetrics#ibm}
  */
  readonly ibm?: ArchiveMetricsIbm;
  /**
  * The retention policy (in days) for the archived metrics. Having default values when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#retention_policy ArchiveMetrics#retention_policy}
  */
  readonly retentionPolicy?: ArchiveMetricsRetentionPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#s3 ArchiveMetrics#s3}
  */
  readonly s3?: ArchiveMetricsS3;
}
export interface ArchiveMetricsIbm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#crn ArchiveMetrics#crn}
  */
  readonly crn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#endpoint ArchiveMetrics#endpoint}
  */
  readonly endpoint: string;
}

export function archiveMetricsIbmToTerraform(struct?: ArchiveMetricsIbm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crn: cdktf.stringToTerraform(struct!.crn),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function archiveMetricsIbmToHclTerraform(struct?: ArchiveMetricsIbm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crn: {
      value: cdktf.stringToHclTerraform(struct!.crn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveMetricsIbmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArchiveMetricsIbm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crn = this._crn;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveMetricsIbm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crn = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crn = value.crn;
      this._endpoint = value.endpoint;
    }
  }

  // crn - computed: false, optional: false, required: true
  private _crn?: string; 
  public get crn() {
    return this.getStringAttribute('crn');
  }
  public set crn(value: string) {
    this._crn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crnInput() {
    return this._crn;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface ArchiveMetricsRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#five_minutes_resolution ArchiveMetrics#five_minutes_resolution}
  */
  readonly fiveMinutesResolution: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#one_hour_resolution ArchiveMetrics#one_hour_resolution}
  */
  readonly oneHourResolution: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#raw_resolution ArchiveMetrics#raw_resolution}
  */
  readonly rawResolution: number;
}

export function archiveMetricsRetentionPolicyToTerraform(struct?: ArchiveMetricsRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    five_minutes_resolution: cdktf.numberToTerraform(struct!.fiveMinutesResolution),
    one_hour_resolution: cdktf.numberToTerraform(struct!.oneHourResolution),
    raw_resolution: cdktf.numberToTerraform(struct!.rawResolution),
  }
}


export function archiveMetricsRetentionPolicyToHclTerraform(struct?: ArchiveMetricsRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    five_minutes_resolution: {
      value: cdktf.numberToHclTerraform(struct!.fiveMinutesResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_hour_resolution: {
      value: cdktf.numberToHclTerraform(struct!.oneHourResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raw_resolution: {
      value: cdktf.numberToHclTerraform(struct!.rawResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveMetricsRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArchiveMetricsRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fiveMinutesResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinutesResolution = this._fiveMinutesResolution;
    }
    if (this._oneHourResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneHourResolution = this._oneHourResolution;
    }
    if (this._rawResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawResolution = this._rawResolution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveMetricsRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fiveMinutesResolution = undefined;
      this._oneHourResolution = undefined;
      this._rawResolution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fiveMinutesResolution = value.fiveMinutesResolution;
      this._oneHourResolution = value.oneHourResolution;
      this._rawResolution = value.rawResolution;
    }
  }

  // five_minutes_resolution - computed: true, optional: false, required: true
  private _fiveMinutesResolution?: number; 
  public get fiveMinutesResolution() {
    return this.getNumberAttribute('five_minutes_resolution');
  }
  public set fiveMinutesResolution(value: number) {
    this._fiveMinutesResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinutesResolutionInput() {
    return this._fiveMinutesResolution;
  }

  // one_hour_resolution - computed: true, optional: false, required: true
  private _oneHourResolution?: number; 
  public get oneHourResolution() {
    return this.getNumberAttribute('one_hour_resolution');
  }
  public set oneHourResolution(value: number) {
    this._oneHourResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oneHourResolutionInput() {
    return this._oneHourResolution;
  }

  // raw_resolution - computed: true, optional: false, required: true
  private _rawResolution?: number; 
  public get rawResolution() {
    return this.getNumberAttribute('raw_resolution');
  }
  public set rawResolution(value: number) {
    this._rawResolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawResolutionInput() {
    return this._rawResolution;
  }
}
export interface ArchiveMetricsS3 {
  /**
  * The bucket name to store the archived metrics in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#bucket ArchiveMetrics#bucket}
  */
  readonly bucket: string;
  /**
  * The bucket region. see - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#region ArchiveMetrics#region}
  */
  readonly region: string;
}

export function archiveMetricsS3ToTerraform(struct?: ArchiveMetricsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function archiveMetricsS3ToHclTerraform(struct?: ArchiveMetricsS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchiveMetricsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArchiveMetricsS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchiveMetricsS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics coralogix_archive_metrics}
*/
export class ArchiveMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_archive_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchiveMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchiveMetrics to import
  * @param importFromId The id of the existing ArchiveMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchiveMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_archive_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/archive_metrics coralogix_archive_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchiveMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArchiveMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_archive_metrics',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ibm.internalValue = config.ibm;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._s3.internalValue = config.s3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ibm - computed: false, optional: true, required: false
  private _ibm = new ArchiveMetricsIbmOutputReference(this, "ibm");
  public get ibm() {
    return this._ibm;
  }
  public putIbm(value: ArchiveMetricsIbm) {
    this._ibm.internalValue = value;
  }
  public resetIbm() {
    this._ibm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmInput() {
    return this._ibm.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy = new ArchiveMetricsRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: ArchiveMetricsRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new ArchiveMetricsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: ArchiveMetricsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ibm: archiveMetricsIbmToTerraform(this._ibm.internalValue),
      retention_policy: archiveMetricsRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      s3: archiveMetricsS3ToTerraform(this._s3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ibm: {
        value: archiveMetricsIbmToHclTerraform(this._ibm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArchiveMetricsIbm",
      },
      retention_policy: {
        value: archiveMetricsRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArchiveMetricsRetentionPolicy",
      },
      s3: {
        value: archiveMetricsS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArchiveMetricsS3",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
