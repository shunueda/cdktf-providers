// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagespeedCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds between checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#check_interval PagespeedCheck#check_interval}
  */
  readonly checkInterval: number;
  /**
  * List of contact group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#contact_groups PagespeedCheck#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#id PagespeedCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#name PagespeedCheck#name}
  */
  readonly name: string;
  /**
  * Whether the check should be run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#paused PagespeedCheck#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Region on which to run checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#region PagespeedCheck#region}
  */
  readonly region: string;
  /**
  * alert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#alert_config PagespeedCheck#alert_config}
  */
  readonly alertConfig: PagespeedCheckAlertConfig;
  /**
  * monitored_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#monitored_resource PagespeedCheck#monitored_resource}
  */
  readonly monitoredResource: PagespeedCheckMonitoredResource;
}
export interface PagespeedCheckAlertConfig {
  /**
  * An alert will be sent if the size of the page is larger than this value (kb).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#alert_bigger PagespeedCheck#alert_bigger}
  */
  readonly alertBigger?: number;
  /**
  * An alert will be sent if the load time of the page exceeds this value (ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#alert_slower PagespeedCheck#alert_slower}
  */
  readonly alertSlower?: number;
  /**
  * An alert will be sent if the size of the page is smaller than this value (kb).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#alert_smaller PagespeedCheck#alert_smaller}
  */
  readonly alertSmaller?: number;
}

export function pagespeedCheckAlertConfigToTerraform(struct?: PagespeedCheckAlertConfigOutputReference | PagespeedCheckAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_bigger: cdktf.numberToTerraform(struct!.alertBigger),
    alert_slower: cdktf.numberToTerraform(struct!.alertSlower),
    alert_smaller: cdktf.numberToTerraform(struct!.alertSmaller),
  }
}


export function pagespeedCheckAlertConfigToHclTerraform(struct?: PagespeedCheckAlertConfigOutputReference | PagespeedCheckAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_bigger: {
      value: cdktf.numberToHclTerraform(struct!.alertBigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_slower: {
      value: cdktf.numberToHclTerraform(struct!.alertSlower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_smaller: {
      value: cdktf.numberToHclTerraform(struct!.alertSmaller),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagespeedCheckAlertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagespeedCheckAlertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertBigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertBigger = this._alertBigger;
    }
    if (this._alertSlower !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSlower = this._alertSlower;
    }
    if (this._alertSmaller !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSmaller = this._alertSmaller;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagespeedCheckAlertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertBigger = undefined;
      this._alertSlower = undefined;
      this._alertSmaller = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertBigger = value.alertBigger;
      this._alertSlower = value.alertSlower;
      this._alertSmaller = value.alertSmaller;
    }
  }

  // alert_bigger - computed: false, optional: true, required: false
  private _alertBigger?: number; 
  public get alertBigger() {
    return this.getNumberAttribute('alert_bigger');
  }
  public set alertBigger(value: number) {
    this._alertBigger = value;
  }
  public resetAlertBigger() {
    this._alertBigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBiggerInput() {
    return this._alertBigger;
  }

  // alert_slower - computed: false, optional: true, required: false
  private _alertSlower?: number; 
  public get alertSlower() {
    return this.getNumberAttribute('alert_slower');
  }
  public set alertSlower(value: number) {
    this._alertSlower = value;
  }
  public resetAlertSlower() {
    this._alertSlower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSlowerInput() {
    return this._alertSlower;
  }

  // alert_smaller - computed: false, optional: true, required: false
  private _alertSmaller?: number; 
  public get alertSmaller() {
    return this.getNumberAttribute('alert_smaller');
  }
  public set alertSmaller(value: number) {
    this._alertSmaller = value;
  }
  public resetAlertSmaller() {
    this._alertSmaller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSmallerInput() {
    return this._alertSmaller;
  }
}
export interface PagespeedCheckMonitoredResource {
  /**
  * URL or IP address of the website under test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#address PagespeedCheck#address}
  */
  readonly address: string;
}

export function pagespeedCheckMonitoredResourceToTerraform(struct?: PagespeedCheckMonitoredResourceOutputReference | PagespeedCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function pagespeedCheckMonitoredResourceToHclTerraform(struct?: PagespeedCheckMonitoredResourceOutputReference | PagespeedCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PagespeedCheckMonitoredResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PagespeedCheckMonitoredResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PagespeedCheckMonitoredResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check statuscake_pagespeed_check}
*/
export class PagespeedCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_pagespeed_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagespeedCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagespeedCheck to import
  * @param importFromId The id of the existing PagespeedCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagespeedCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_pagespeed_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/pagespeed_check statuscake_pagespeed_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagespeedCheckConfig
  */
  public constructor(scope: Construct, id: string, config: PagespeedCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_pagespeed_check',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2',
        providerVersionConstraint: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkInterval = config.checkInterval;
    this._contactGroups = config.contactGroups;
    this._id = config.id;
    this._name = config.name;
    this._paused = config.paused;
    this._region = config.region;
    this._alertConfig.internalValue = config.alertConfig;
    this._monitoredResource.internalValue = config.monitoredResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval - computed: false, optional: false, required: true
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
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

  // alert_config - computed: false, optional: false, required: true
  private _alertConfig = new PagespeedCheckAlertConfigOutputReference(this, "alert_config");
  public get alertConfig() {
    return this._alertConfig;
  }
  public putAlertConfig(value: PagespeedCheckAlertConfig) {
    this._alertConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigInput() {
    return this._alertConfig.internalValue;
  }

  // monitored_resource - computed: false, optional: false, required: true
  private _monitoredResource = new PagespeedCheckMonitoredResourceOutputReference(this, "monitored_resource");
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public putMonitoredResource(value: PagespeedCheckMonitoredResource) {
    this._monitoredResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval: cdktf.numberToTerraform(this._checkInterval),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      region: cdktf.stringToTerraform(this._region),
      alert_config: pagespeedCheckAlertConfigToTerraform(this._alertConfig.internalValue),
      monitored_resource: pagespeedCheckMonitoredResourceToTerraform(this._monitoredResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval: {
        value: cdktf.numberToHclTerraform(this._checkInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_config: {
        value: pagespeedCheckAlertConfigToHclTerraform(this._alertConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagespeedCheckAlertConfigList",
      },
      monitored_resource: {
        value: pagespeedCheckMonitoredResourceToHclTerraform(this._monitoredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PagespeedCheckMonitoredResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
