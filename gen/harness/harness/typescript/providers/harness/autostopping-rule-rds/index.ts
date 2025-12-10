// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutostoppingRuleRdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#cloud_connector_id AutostoppingRuleRds#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Boolean that indicates whether the AutoStopping rule should be created in DryRun mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#dry_run AutostoppingRuleRds#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#id AutostoppingRuleRds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#idle_time_mins AutostoppingRuleRds#idle_time_mins}
  */
  readonly idleTimeMins?: number;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#name AutostoppingRuleRds#name}
  */
  readonly name: string;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#database AutostoppingRuleRds#database}
  */
  readonly database: AutostoppingRuleRdsDatabase;
  /**
  * depends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#depends AutostoppingRuleRds#depends}
  */
  readonly depends?: AutostoppingRuleRdsDepends[] | cdktf.IResolvable;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#tcp AutostoppingRuleRds#tcp}
  */
  readonly tcp?: AutostoppingRuleRdsTcp[] | cdktf.IResolvable;
}
export interface AutostoppingRuleRdsDatabase {
  /**
  * ID of the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#id AutostoppingRuleRds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Region to which database belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#region AutostoppingRuleRds#region}
  */
  readonly region: string;
}

export function autostoppingRuleRdsDatabaseToTerraform(struct?: AutostoppingRuleRdsDatabaseOutputReference | AutostoppingRuleRdsDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function autostoppingRuleRdsDatabaseToHclTerraform(struct?: AutostoppingRuleRdsDatabaseOutputReference | AutostoppingRuleRdsDatabase): any {
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

export class AutostoppingRuleRdsDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutostoppingRuleRdsDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleRdsDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._region = value.region;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
export interface AutostoppingRuleRdsDepends {
  /**
  * Number of seconds the rule should wait after warming up the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#delay_in_sec AutostoppingRuleRds#delay_in_sec}
  */
  readonly delayInSec?: number;
  /**
  * Rule id of the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#rule_id AutostoppingRuleRds#rule_id}
  */
  readonly ruleId: number;
}

export function autostoppingRuleRdsDependsToTerraform(struct?: AutostoppingRuleRdsDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_sec: cdktf.numberToTerraform(struct!.delayInSec),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
  }
}


export function autostoppingRuleRdsDependsToHclTerraform(struct?: AutostoppingRuleRdsDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.delayInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleRdsDependsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingRuleRdsDepends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSec = this._delayInSec;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleRdsDepends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayInSec = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayInSec = value.delayInSec;
      this._ruleId = value.ruleId;
    }
  }

  // delay_in_sec - computed: false, optional: true, required: false
  private _delayInSec?: number; 
  public get delayInSec() {
    return this.getNumberAttribute('delay_in_sec');
  }
  public set delayInSec(value: number) {
    this._delayInSec = value;
  }
  public resetDelayInSec() {
    this._delayInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecInput() {
    return this._delayInSec;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class AutostoppingRuleRdsDependsList extends cdktf.ComplexList {
  public internalValue? : AutostoppingRuleRdsDepends[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingRuleRdsDependsOutputReference {
    return new AutostoppingRuleRdsDependsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutostoppingRuleRdsTcpForwardRule {
  /**
  * Port to listen on the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#connect_on AutostoppingRuleRds#connect_on}
  */
  readonly connectOn?: number;
  /**
  * Port to listen on the vm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#port AutostoppingRuleRds#port}
  */
  readonly port: number;
}

export function autostoppingRuleRdsTcpForwardRuleToTerraform(struct?: AutostoppingRuleRdsTcpForwardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_on: cdktf.numberToTerraform(struct!.connectOn),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function autostoppingRuleRdsTcpForwardRuleToHclTerraform(struct?: AutostoppingRuleRdsTcpForwardRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_on: {
      value: cdktf.numberToHclTerraform(struct!.connectOn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleRdsTcpForwardRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingRuleRdsTcpForwardRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectOn = this._connectOn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleRdsTcpForwardRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectOn = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectOn = value.connectOn;
      this._port = value.port;
    }
  }

  // connect_on - computed: false, optional: true, required: false
  private _connectOn?: number; 
  public get connectOn() {
    return this.getNumberAttribute('connect_on');
  }
  public set connectOn(value: number) {
    this._connectOn = value;
  }
  public resetConnectOn() {
    this._connectOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOnInput() {
    return this._connectOn;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class AutostoppingRuleRdsTcpForwardRuleList extends cdktf.ComplexList {
  public internalValue? : AutostoppingRuleRdsTcpForwardRule[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingRuleRdsTcpForwardRuleOutputReference {
    return new AutostoppingRuleRdsTcpForwardRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutostoppingRuleRdsTcp {
  /**
  * Id of the Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#proxy_id AutostoppingRuleRds#proxy_id}
  */
  readonly proxyId: string;
  /**
  * forward_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#forward_rule AutostoppingRuleRds#forward_rule}
  */
  readonly forwardRule?: AutostoppingRuleRdsTcpForwardRule[] | cdktf.IResolvable;
}

export function autostoppingRuleRdsTcpToTerraform(struct?: AutostoppingRuleRdsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
    forward_rule: cdktf.listMapper(autostoppingRuleRdsTcpForwardRuleToTerraform, true)(struct!.forwardRule),
  }
}


export function autostoppingRuleRdsTcpToHclTerraform(struct?: AutostoppingRuleRdsTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_rule: {
      value: cdktf.listMapperHcl(autostoppingRuleRdsTcpForwardRuleToHclTerraform, true)(struct!.forwardRule),
      isBlock: true,
      type: "list",
      storageClassType: "AutostoppingRuleRdsTcpForwardRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleRdsTcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingRuleRdsTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    if (this._forwardRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRule = this._forwardRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleRdsTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyId = undefined;
      this._forwardRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyId = value.proxyId;
      this._forwardRule.internalValue = value.forwardRule;
    }
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // forward_rule - computed: false, optional: true, required: false
  private _forwardRule = new AutostoppingRuleRdsTcpForwardRuleList(this, "forward_rule", false);
  public get forwardRule() {
    return this._forwardRule;
  }
  public putForwardRule(value: AutostoppingRuleRdsTcpForwardRule[] | cdktf.IResolvable) {
    this._forwardRule.internalValue = value;
  }
  public resetForwardRule() {
    this._forwardRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRuleInput() {
    return this._forwardRule.internalValue;
  }
}

export class AutostoppingRuleRdsTcpList extends cdktf.ComplexList {
  public internalValue? : AutostoppingRuleRdsTcp[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingRuleRdsTcpOutputReference {
    return new AutostoppingRuleRdsTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds harness_autostopping_rule_rds}
*/
export class AutostoppingRuleRds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_rule_rds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutostoppingRuleRds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutostoppingRuleRds to import
  * @param importFromId The id of the existing AutostoppingRuleRds that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutostoppingRuleRds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_rule_rds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/autostopping_rule_rds harness_autostopping_rule_rds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutostoppingRuleRdsConfig
  */
  public constructor(scope: Construct, id: string, config: AutostoppingRuleRdsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_rule_rds',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConnectorId = config.cloudConnectorId;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._idleTimeMins = config.idleTimeMins;
    this._name = config.name;
    this._database.internalValue = config.database;
    this._depends.internalValue = config.depends;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // idle_time_mins - computed: false, optional: true, required: false
  private _idleTimeMins?: number; 
  public get idleTimeMins() {
    return this.getNumberAttribute('idle_time_mins');
  }
  public set idleTimeMins(value: number) {
    this._idleTimeMins = value;
  }
  public resetIdleTimeMins() {
    this._idleTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeMinsInput() {
    return this._idleTimeMins;
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

  // database - computed: false, optional: false, required: true
  private _database = new AutostoppingRuleRdsDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: AutostoppingRuleRdsDatabase) {
    this._database.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // depends - computed: false, optional: true, required: false
  private _depends = new AutostoppingRuleRdsDependsList(this, "depends", false);
  public get depends() {
    return this._depends;
  }
  public putDepends(value: AutostoppingRuleRdsDepends[] | cdktf.IResolvable) {
    this._depends.internalValue = value;
  }
  public resetDepends() {
    this._depends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsInput() {
    return this._depends.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new AutostoppingRuleRdsTcpList(this, "tcp", false);
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: AutostoppingRuleRdsTcp[] | cdktf.IResolvable) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      idle_time_mins: cdktf.numberToTerraform(this._idleTimeMins),
      name: cdktf.stringToTerraform(this._name),
      database: autostoppingRuleRdsDatabaseToTerraform(this._database.internalValue),
      depends: cdktf.listMapper(autostoppingRuleRdsDependsToTerraform, true)(this._depends.internalValue),
      tcp: cdktf.listMapper(autostoppingRuleRdsTcpToTerraform, true)(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
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
      idle_time_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeMins),
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
      database: {
        value: autostoppingRuleRdsDatabaseToHclTerraform(this._database.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleRdsDatabaseList",
      },
      depends: {
        value: cdktf.listMapperHcl(autostoppingRuleRdsDependsToHclTerraform, true)(this._depends.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleRdsDependsList",
      },
      tcp: {
        value: cdktf.listMapperHcl(autostoppingRuleRdsTcpToHclTerraform, true)(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleRdsTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
