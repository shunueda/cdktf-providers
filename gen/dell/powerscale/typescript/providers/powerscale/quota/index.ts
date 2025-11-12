// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, quotas using the quota directory see the quota thresholds as share size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#container Quota#container}
  */
  readonly container?: boolean | cdktf.IResolvable;
  /**
  * True if the quota provides enforcement, otherwise an accounting quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#enforced Quota#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Force creation of quotas on the root of /ifs or percent based quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#force Quota#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * If true, skip child quota's threshold comparison with parent quota path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#ignore_limit_checks Quota#ignore_limit_checks}
  */
  readonly ignoreLimitChecks?: boolean | cdktf.IResolvable;
  /**
  * If true, quota governs snapshot data as well as head data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#include_snapshots Quota#include_snapshots}
  */
  readonly includeSnapshots: boolean | cdktf.IResolvable;
  /**
  * For user, group and directory quotas, true if the quota is linked and controlled by a parent default-* quota. Linked quotas cannot be modified until they are unlinked. Set linked as true or false to link or unlink quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#linked Quota#linked}
  */
  readonly linked?: boolean | cdktf.IResolvable;
  /**
  * The ifs path governed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#path Quota#path}
  */
  readonly path: string;
  /**
  * Specifies the persona of the file group. persona is required for user and group type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#persona Quota#persona}
  */
  readonly persona?: QuotaPersona;
  /**
  * The thresholds of quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#thresholds Quota#thresholds}
  */
  readonly thresholds?: QuotaThresholds;
  /**
  * Thresholds apply on quota accounting metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#thresholds_on Quota#thresholds_on}
  */
  readonly thresholdsOn?: string;
  /**
  * The type of quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#type Quota#type}
  */
  readonly type: string;
  /**
  * Optional named zone to use for user and group resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#zone Quota#zone}
  */
  readonly zone?: string;
}
export interface QuotaPersona {
  /**
  * Specifies the serialized form of a persona, which can be 'UID:0', 'USER:name', 'GID:0', 'GROUP:wheel', or 'SID:S-1-1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#id Quota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the persona name, which must be combined with a type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#name Quota#name}
  */
  readonly name?: string;
  /**
  * Specifies the type of persona, which must be combined with a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#type Quota#type}
  */
  readonly type?: string;
}

export function quotaPersonaToTerraform(struct?: QuotaPersona | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function quotaPersonaToHclTerraform(struct?: QuotaPersona | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuotaPersonaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuotaPersona | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotaPersona | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
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

  // name - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface QuotaThresholds {
  /**
  * Usage bytes at which notifications will be sent but writes will not be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#advisory Quota#advisory}
  */
  readonly advisory?: number;
  /**
  * Usage bytes at which further writes will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#hard Quota#hard}
  */
  readonly hard?: number;
  /**
  * Advisory threshold as percent of hard threshold. Usage bytes at which notifications will be sent but writes will not be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#percent_advisory Quota#percent_advisory}
  */
  readonly percentAdvisory?: number;
  /**
  * Soft threshold as percent of hard threshold. Usage bytes at which notifications will be sent and soft grace time will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#percent_soft Quota#percent_soft}
  */
  readonly percentSoft?: number;
  /**
  * Usage bytes at which notifications will be sent and soft grace time will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#soft Quota#soft}
  */
  readonly soft?: number;
  /**
  * Time in seconds after which the soft threshold has been hit before writes will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#soft_grace Quota#soft_grace}
  */
  readonly softGrace?: number;
}

export function quotaThresholdsToTerraform(struct?: QuotaThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advisory: cdktf.numberToTerraform(struct!.advisory),
    hard: cdktf.numberToTerraform(struct!.hard),
    percent_advisory: cdktf.numberToTerraform(struct!.percentAdvisory),
    percent_soft: cdktf.numberToTerraform(struct!.percentSoft),
    soft: cdktf.numberToTerraform(struct!.soft),
    soft_grace: cdktf.numberToTerraform(struct!.softGrace),
  }
}


export function quotaThresholdsToHclTerraform(struct?: QuotaThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advisory: {
      value: cdktf.numberToHclTerraform(struct!.advisory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hard: {
      value: cdktf.numberToHclTerraform(struct!.hard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_advisory: {
      value: cdktf.numberToHclTerraform(struct!.percentAdvisory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_soft: {
      value: cdktf.numberToHclTerraform(struct!.percentSoft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soft: {
      value: cdktf.numberToHclTerraform(struct!.soft),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soft_grace: {
      value: cdktf.numberToHclTerraform(struct!.softGrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuotaThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuotaThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advisory !== undefined) {
      hasAnyValues = true;
      internalValueResult.advisory = this._advisory;
    }
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._percentAdvisory !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentAdvisory = this._percentAdvisory;
    }
    if (this._percentSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentSoft = this._percentSoft;
    }
    if (this._soft !== undefined) {
      hasAnyValues = true;
      internalValueResult.soft = this._soft;
    }
    if (this._softGrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.softGrace = this._softGrace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotaThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advisory = undefined;
      this._hard = undefined;
      this._percentAdvisory = undefined;
      this._percentSoft = undefined;
      this._soft = undefined;
      this._softGrace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advisory = value.advisory;
      this._hard = value.hard;
      this._percentAdvisory = value.percentAdvisory;
      this._percentSoft = value.percentSoft;
      this._soft = value.soft;
      this._softGrace = value.softGrace;
    }
  }

  // advisory - computed: true, optional: true, required: false
  private _advisory?: number; 
  public get advisory() {
    return this.getNumberAttribute('advisory');
  }
  public set advisory(value: number) {
    this._advisory = value;
  }
  public resetAdvisory() {
    this._advisory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advisoryInput() {
    return this._advisory;
  }

  // advisory_exceeded - computed: true, optional: false, required: false
  public get advisoryExceeded() {
    return this.getBooleanAttribute('advisory_exceeded');
  }

  // advisory_last_exceeded - computed: true, optional: false, required: false
  public get advisoryLastExceeded() {
    return this.getNumberAttribute('advisory_last_exceeded');
  }

  // hard - computed: true, optional: true, required: false
  private _hard?: number; 
  public get hard() {
    return this.getNumberAttribute('hard');
  }
  public set hard(value: number) {
    this._hard = value;
  }
  public resetHard() {
    this._hard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }

  // hard_exceeded - computed: true, optional: false, required: false
  public get hardExceeded() {
    return this.getBooleanAttribute('hard_exceeded');
  }

  // hard_last_exceeded - computed: true, optional: false, required: false
  public get hardLastExceeded() {
    return this.getNumberAttribute('hard_last_exceeded');
  }

  // percent_advisory - computed: true, optional: true, required: false
  private _percentAdvisory?: number; 
  public get percentAdvisory() {
    return this.getNumberAttribute('percent_advisory');
  }
  public set percentAdvisory(value: number) {
    this._percentAdvisory = value;
  }
  public resetPercentAdvisory() {
    this._percentAdvisory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentAdvisoryInput() {
    return this._percentAdvisory;
  }

  // percent_soft - computed: true, optional: true, required: false
  private _percentSoft?: number; 
  public get percentSoft() {
    return this.getNumberAttribute('percent_soft');
  }
  public set percentSoft(value: number) {
    this._percentSoft = value;
  }
  public resetPercentSoft() {
    this._percentSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentSoftInput() {
    return this._percentSoft;
  }

  // soft - computed: true, optional: true, required: false
  private _soft?: number; 
  public get soft() {
    return this.getNumberAttribute('soft');
  }
  public set soft(value: number) {
    this._soft = value;
  }
  public resetSoft() {
    this._soft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softInput() {
    return this._soft;
  }

  // soft_exceeded - computed: true, optional: false, required: false
  public get softExceeded() {
    return this.getBooleanAttribute('soft_exceeded');
  }

  // soft_grace - computed: true, optional: true, required: false
  private _softGrace?: number; 
  public get softGrace() {
    return this.getNumberAttribute('soft_grace');
  }
  public set softGrace(value: number) {
    this._softGrace = value;
  }
  public resetSoftGrace() {
    this._softGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softGraceInput() {
    return this._softGrace;
  }

  // soft_last_exceeded - computed: true, optional: false, required: false
  public get softLastExceeded() {
    return this.getNumberAttribute('soft_last_exceeded');
  }
}
export interface QuotaUsage {
}

export function quotaUsageToTerraform(struct?: QuotaUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function quotaUsageToHclTerraform(struct?: QuotaUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class QuotaUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuotaUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotaUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applogical - computed: true, optional: false, required: false
  public get applogical() {
    return this.getNumberAttribute('applogical');
  }

  // applogical_ready - computed: true, optional: false, required: false
  public get applogicalReady() {
    return this.getBooleanAttribute('applogical_ready');
  }

  // fslogical - computed: true, optional: false, required: false
  public get fslogical() {
    return this.getNumberAttribute('fslogical');
  }

  // fslogical_ready - computed: true, optional: false, required: false
  public get fslogicalReady() {
    return this.getBooleanAttribute('fslogical_ready');
  }

  // fsphysical - computed: true, optional: false, required: false
  public get fsphysical() {
    return this.getNumberAttribute('fsphysical');
  }

  // fsphysical_ready - computed: true, optional: false, required: false
  public get fsphysicalReady() {
    return this.getBooleanAttribute('fsphysical_ready');
  }

  // inodes - computed: true, optional: false, required: false
  public get inodes() {
    return this.getNumberAttribute('inodes');
  }

  // inodes_ready - computed: true, optional: false, required: false
  public get inodesReady() {
    return this.getBooleanAttribute('inodes_ready');
  }

  // physical - computed: true, optional: false, required: false
  public get physical() {
    return this.getNumberAttribute('physical');
  }

  // physical_data - computed: true, optional: false, required: false
  public get physicalData() {
    return this.getNumberAttribute('physical_data');
  }

  // physical_data_ready - computed: true, optional: false, required: false
  public get physicalDataReady() {
    return this.getBooleanAttribute('physical_data_ready');
  }

  // physical_protection - computed: true, optional: false, required: false
  public get physicalProtection() {
    return this.getNumberAttribute('physical_protection');
  }

  // physical_protection_ready - computed: true, optional: false, required: false
  public get physicalProtectionReady() {
    return this.getBooleanAttribute('physical_protection_ready');
  }

  // physical_ready - computed: true, optional: false, required: false
  public get physicalReady() {
    return this.getBooleanAttribute('physical_ready');
  }

  // shadow_refs - computed: true, optional: false, required: false
  public get shadowRefs() {
    return this.getNumberAttribute('shadow_refs');
  }

  // shadow_refs_ready - computed: true, optional: false, required: false
  public get shadowRefsReady() {
    return this.getBooleanAttribute('shadow_refs_ready');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota powerscale_quota}
*/
export class Quota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Quota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Quota to import
  * @param importFromId The id of the existing Quota that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Quota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/quota powerscale_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotaConfig
  */
  public constructor(scope: Construct, id: string, config: QuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_quota',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._container = config.container;
    this._enforced = config.enforced;
    this._force = config.force;
    this._ignoreLimitChecks = config.ignoreLimitChecks;
    this._includeSnapshots = config.includeSnapshots;
    this._linked = config.linked;
    this._path = config.path;
    this._persona.internalValue = config.persona;
    this._thresholds.internalValue = config.thresholds;
    this._thresholdsOn = config.thresholdsOn;
    this._type = config.type;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container - computed: true, optional: true, required: false
  private _container?: boolean | cdktf.IResolvable; 
  public get container() {
    return this.getBooleanAttribute('container');
  }
  public set container(value: boolean | cdktf.IResolvable) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // efficiency_ratio - computed: true, optional: false, required: false
  public get efficiencyRatio() {
    return this.getNumberAttribute('efficiency_ratio');
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_limit_checks - computed: false, optional: true, required: false
  private _ignoreLimitChecks?: boolean | cdktf.IResolvable; 
  public get ignoreLimitChecks() {
    return this.getBooleanAttribute('ignore_limit_checks');
  }
  public set ignoreLimitChecks(value: boolean | cdktf.IResolvable) {
    this._ignoreLimitChecks = value;
  }
  public resetIgnoreLimitChecks() {
    this._ignoreLimitChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLimitChecksInput() {
    return this._ignoreLimitChecks;
  }

  // include_snapshots - computed: false, optional: false, required: true
  private _includeSnapshots?: boolean | cdktf.IResolvable; 
  public get includeSnapshots() {
    return this.getBooleanAttribute('include_snapshots');
  }
  public set includeSnapshots(value: boolean | cdktf.IResolvable) {
    this._includeSnapshots = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSnapshotsInput() {
    return this._includeSnapshots;
  }

  // linked - computed: true, optional: true, required: false
  private _linked?: boolean | cdktf.IResolvable; 
  public get linked() {
    return this.getBooleanAttribute('linked');
  }
  public set linked(value: boolean | cdktf.IResolvable) {
    this._linked = value;
  }
  public resetLinked() {
    this._linked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInput() {
    return this._linked;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getStringAttribute('notifications');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // persona - computed: false, optional: true, required: false
  private _persona = new QuotaPersonaOutputReference(this, "persona");
  public get persona() {
    return this._persona;
  }
  public putPersona(value: QuotaPersona) {
    this._persona.internalValue = value;
  }
  public resetPersona() {
    this._persona.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personaInput() {
    return this._persona.internalValue;
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // reduction_ratio - computed: true, optional: false, required: false
  public get reductionRatio() {
    return this.getNumberAttribute('reduction_ratio');
  }

  // thresholds - computed: true, optional: true, required: false
  private _thresholds = new QuotaThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: QuotaThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // thresholds_on - computed: true, optional: true, required: false
  private _thresholdsOn?: string; 
  public get thresholdsOn() {
    return this.getStringAttribute('thresholds_on');
  }
  public set thresholdsOn(value: string) {
    this._thresholdsOn = value;
  }
  public resetThresholdsOn() {
    this._thresholdsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsOnInput() {
    return this._thresholdsOn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new QuotaUsageOutputReference(this, "usage");
  public get usage() {
    return this._usage;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container: cdktf.booleanToTerraform(this._container),
      enforced: cdktf.booleanToTerraform(this._enforced),
      force: cdktf.booleanToTerraform(this._force),
      ignore_limit_checks: cdktf.booleanToTerraform(this._ignoreLimitChecks),
      include_snapshots: cdktf.booleanToTerraform(this._includeSnapshots),
      linked: cdktf.booleanToTerraform(this._linked),
      path: cdktf.stringToTerraform(this._path),
      persona: quotaPersonaToTerraform(this._persona.internalValue),
      thresholds: quotaThresholdsToTerraform(this._thresholds.internalValue),
      thresholds_on: cdktf.stringToTerraform(this._thresholdsOn),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container: {
        value: cdktf.booleanToHclTerraform(this._container),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforced: {
        value: cdktf.booleanToHclTerraform(this._enforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_limit_checks: {
        value: cdktf.booleanToHclTerraform(this._ignoreLimitChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_snapshots: {
        value: cdktf.booleanToHclTerraform(this._includeSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      linked: {
        value: cdktf.booleanToHclTerraform(this._linked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persona: {
        value: quotaPersonaToHclTerraform(this._persona.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuotaPersona",
      },
      thresholds: {
        value: quotaThresholdsToHclTerraform(this._thresholds.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuotaThresholds",
      },
      thresholds_on: {
        value: cdktf.stringToHclTerraform(this._thresholdsOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
