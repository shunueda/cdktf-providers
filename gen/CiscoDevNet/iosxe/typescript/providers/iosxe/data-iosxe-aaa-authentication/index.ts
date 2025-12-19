// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/aaa_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAaaAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/aaa_authentication#device DataIosxeAaaAuthentication#device}
  */
  readonly device?: string;
}
export interface DataIosxeAaaAuthenticationDot1X {
}

export function dataIosxeAaaAuthenticationDot1XToTerraform(struct?: DataIosxeAaaAuthenticationDot1X): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthenticationDot1XToHclTerraform(struct?: DataIosxeAaaAuthenticationDot1X): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthenticationDot1XOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeAaaAuthenticationDot1X | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthenticationDot1X | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a1_cache - computed: true, optional: false, required: false
  public get a1Cache() {
    return this.getStringAttribute('a1_cache');
  }

  // a1_group - computed: true, optional: false, required: false
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }

  // a1_local - computed: true, optional: false, required: false
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }

  // a1_radius - computed: true, optional: false, required: false
  public get a1Radius() {
    return this.getBooleanAttribute('a1_radius');
  }

  // a2_cache - computed: true, optional: false, required: false
  public get a2Cache() {
    return this.getStringAttribute('a2_cache');
  }

  // a2_group - computed: true, optional: false, required: false
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }

  // a2_local - computed: true, optional: false, required: false
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }

  // a2_radius - computed: true, optional: false, required: false
  public get a2Radius() {
    return this.getBooleanAttribute('a2_radius');
  }

  // a3_cache - computed: true, optional: false, required: false
  public get a3Cache() {
    return this.getStringAttribute('a3_cache');
  }

  // a3_group - computed: true, optional: false, required: false
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }

  // a3_local - computed: true, optional: false, required: false
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }

  // a3_radius - computed: true, optional: false, required: false
  public get a3Radius() {
    return this.getBooleanAttribute('a3_radius');
  }

  // a4_cache - computed: true, optional: false, required: false
  public get a4Cache() {
    return this.getStringAttribute('a4_cache');
  }

  // a4_group - computed: true, optional: false, required: false
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }

  // a4_local - computed: true, optional: false, required: false
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }

  // a4_radius - computed: true, optional: false, required: false
  public get a4Radius() {
    return this.getBooleanAttribute('a4_radius');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeAaaAuthenticationDot1XList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthenticationDot1XOutputReference {
    return new DataIosxeAaaAuthenticationDot1XOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeAaaAuthenticationLogins {
}

export function dataIosxeAaaAuthenticationLoginsToTerraform(struct?: DataIosxeAaaAuthenticationLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAaaAuthenticationLoginsToHclTerraform(struct?: DataIosxeAaaAuthenticationLogins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAaaAuthenticationLoginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeAaaAuthenticationLogins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAaaAuthenticationLogins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // a1_enable - computed: true, optional: false, required: false
  public get a1Enable() {
    return this.getBooleanAttribute('a1_enable');
  }

  // a1_group - computed: true, optional: false, required: false
  public get a1Group() {
    return this.getStringAttribute('a1_group');
  }

  // a1_line - computed: true, optional: false, required: false
  public get a1Line() {
    return this.getBooleanAttribute('a1_line');
  }

  // a1_local - computed: true, optional: false, required: false
  public get a1Local() {
    return this.getBooleanAttribute('a1_local');
  }

  // a1_none - computed: true, optional: false, required: false
  public get a1None() {
    return this.getBooleanAttribute('a1_none');
  }

  // a2_enable - computed: true, optional: false, required: false
  public get a2Enable() {
    return this.getBooleanAttribute('a2_enable');
  }

  // a2_group - computed: true, optional: false, required: false
  public get a2Group() {
    return this.getStringAttribute('a2_group');
  }

  // a2_line - computed: true, optional: false, required: false
  public get a2Line() {
    return this.getBooleanAttribute('a2_line');
  }

  // a2_local - computed: true, optional: false, required: false
  public get a2Local() {
    return this.getBooleanAttribute('a2_local');
  }

  // a2_none - computed: true, optional: false, required: false
  public get a2None() {
    return this.getBooleanAttribute('a2_none');
  }

  // a3_enable - computed: true, optional: false, required: false
  public get a3Enable() {
    return this.getBooleanAttribute('a3_enable');
  }

  // a3_group - computed: true, optional: false, required: false
  public get a3Group() {
    return this.getStringAttribute('a3_group');
  }

  // a3_line - computed: true, optional: false, required: false
  public get a3Line() {
    return this.getBooleanAttribute('a3_line');
  }

  // a3_local - computed: true, optional: false, required: false
  public get a3Local() {
    return this.getBooleanAttribute('a3_local');
  }

  // a3_none - computed: true, optional: false, required: false
  public get a3None() {
    return this.getBooleanAttribute('a3_none');
  }

  // a4_enable - computed: true, optional: false, required: false
  public get a4Enable() {
    return this.getBooleanAttribute('a4_enable');
  }

  // a4_group - computed: true, optional: false, required: false
  public get a4Group() {
    return this.getStringAttribute('a4_group');
  }

  // a4_line - computed: true, optional: false, required: false
  public get a4Line() {
    return this.getBooleanAttribute('a4_line');
  }

  // a4_local - computed: true, optional: false, required: false
  public get a4Local() {
    return this.getBooleanAttribute('a4_local');
  }

  // a4_none - computed: true, optional: false, required: false
  public get a4None() {
    return this.getBooleanAttribute('a4_none');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeAaaAuthenticationLoginsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAaaAuthenticationLoginsOutputReference {
    return new DataIosxeAaaAuthenticationLoginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/aaa_authentication iosxe_aaa_authentication}
*/
export class DataIosxeAaaAuthentication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAaaAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAaaAuthentication to import
  * @param importFromId The id of the existing DataIosxeAaaAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/aaa_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAaaAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/data-sources/aaa_authentication iosxe_aaa_authentication} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAaaAuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAaaAuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_authentication',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dot1x - computed: true, optional: false, required: false
  private _dot1X = new DataIosxeAaaAuthenticationDot1XList(this, "dot1x", false);
  public get dot1X() {
    return this._dot1X;
  }

  // dot1x_default_a1_group - computed: true, optional: false, required: false
  public get dot1XDefaultA1Group() {
    return this.getStringAttribute('dot1x_default_a1_group');
  }

  // dot1x_default_a1_local - computed: true, optional: false, required: false
  public get dot1XDefaultA1Local() {
    return this.getBooleanAttribute('dot1x_default_a1_local');
  }

  // dot1x_default_a2_group - computed: true, optional: false, required: false
  public get dot1XDefaultA2Group() {
    return this.getStringAttribute('dot1x_default_a2_group');
  }

  // dot1x_default_a2_local - computed: true, optional: false, required: false
  public get dot1XDefaultA2Local() {
    return this.getBooleanAttribute('dot1x_default_a2_local');
  }

  // dot1x_default_a3_group - computed: true, optional: false, required: false
  public get dot1XDefaultA3Group() {
    return this.getStringAttribute('dot1x_default_a3_group');
  }

  // dot1x_default_a3_local - computed: true, optional: false, required: false
  public get dot1XDefaultA3Local() {
    return this.getBooleanAttribute('dot1x_default_a3_local');
  }

  // dot1x_default_a4_group - computed: true, optional: false, required: false
  public get dot1XDefaultA4Group() {
    return this.getStringAttribute('dot1x_default_a4_group');
  }

  // dot1x_default_a4_local - computed: true, optional: false, required: false
  public get dot1XDefaultA4Local() {
    return this.getBooleanAttribute('dot1x_default_a4_local');
  }

  // enable_default_enable_legacy - computed: true, optional: false, required: false
  public get enableDefaultEnableLegacy() {
    return this.getBooleanAttribute('enable_default_enable_legacy');
  }

  // enable_default_group1_cache - computed: true, optional: false, required: false
  public get enableDefaultGroup1Cache() {
    return this.getStringAttribute('enable_default_group1_cache');
  }

  // enable_default_group1_enable - computed: true, optional: false, required: false
  public get enableDefaultGroup1Enable() {
    return this.getBooleanAttribute('enable_default_group1_enable');
  }

  // enable_default_group1_group - computed: true, optional: false, required: false
  public get enableDefaultGroup1Group() {
    return this.getStringAttribute('enable_default_group1_group');
  }

  // enable_default_group1_line - computed: true, optional: false, required: false
  public get enableDefaultGroup1Line() {
    return this.getBooleanAttribute('enable_default_group1_line');
  }

  // enable_default_group1_none - computed: true, optional: false, required: false
  public get enableDefaultGroup1None() {
    return this.getBooleanAttribute('enable_default_group1_none');
  }

  // enable_default_group2_cache - computed: true, optional: false, required: false
  public get enableDefaultGroup2Cache() {
    return this.getStringAttribute('enable_default_group2_cache');
  }

  // enable_default_group2_enable - computed: true, optional: false, required: false
  public get enableDefaultGroup2Enable() {
    return this.getBooleanAttribute('enable_default_group2_enable');
  }

  // enable_default_group2_group - computed: true, optional: false, required: false
  public get enableDefaultGroup2Group() {
    return this.getStringAttribute('enable_default_group2_group');
  }

  // enable_default_group2_line - computed: true, optional: false, required: false
  public get enableDefaultGroup2Line() {
    return this.getBooleanAttribute('enable_default_group2_line');
  }

  // enable_default_group2_none - computed: true, optional: false, required: false
  public get enableDefaultGroup2None() {
    return this.getBooleanAttribute('enable_default_group2_none');
  }

  // enable_default_group3_cache - computed: true, optional: false, required: false
  public get enableDefaultGroup3Cache() {
    return this.getStringAttribute('enable_default_group3_cache');
  }

  // enable_default_group3_enable - computed: true, optional: false, required: false
  public get enableDefaultGroup3Enable() {
    return this.getBooleanAttribute('enable_default_group3_enable');
  }

  // enable_default_group3_group - computed: true, optional: false, required: false
  public get enableDefaultGroup3Group() {
    return this.getStringAttribute('enable_default_group3_group');
  }

  // enable_default_group3_line - computed: true, optional: false, required: false
  public get enableDefaultGroup3Line() {
    return this.getBooleanAttribute('enable_default_group3_line');
  }

  // enable_default_group3_none - computed: true, optional: false, required: false
  public get enableDefaultGroup3None() {
    return this.getBooleanAttribute('enable_default_group3_none');
  }

  // enable_default_group4_cache - computed: true, optional: false, required: false
  public get enableDefaultGroup4Cache() {
    return this.getStringAttribute('enable_default_group4_cache');
  }

  // enable_default_group4_enable - computed: true, optional: false, required: false
  public get enableDefaultGroup4Enable() {
    return this.getBooleanAttribute('enable_default_group4_enable');
  }

  // enable_default_group4_group - computed: true, optional: false, required: false
  public get enableDefaultGroup4Group() {
    return this.getStringAttribute('enable_default_group4_group');
  }

  // enable_default_group4_line - computed: true, optional: false, required: false
  public get enableDefaultGroup4Line() {
    return this.getBooleanAttribute('enable_default_group4_line');
  }

  // enable_default_group4_none - computed: true, optional: false, required: false
  public get enableDefaultGroup4None() {
    return this.getBooleanAttribute('enable_default_group4_none');
  }

  // enable_default_group_legacy - computed: true, optional: false, required: false
  public get enableDefaultGroupLegacy() {
    return this.getStringAttribute('enable_default_group_legacy');
  }

  // enable_default_line_legacy - computed: true, optional: false, required: false
  public get enableDefaultLineLegacy() {
    return this.getBooleanAttribute('enable_default_line_legacy');
  }

  // enable_default_none_legacy - computed: true, optional: false, required: false
  public get enableDefaultNoneLegacy() {
    return this.getBooleanAttribute('enable_default_none_legacy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logins - computed: true, optional: false, required: false
  private _logins = new DataIosxeAaaAuthenticationLoginsList(this, "logins", false);
  public get logins() {
    return this._logins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
