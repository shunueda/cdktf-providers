// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsAgentInstallersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#compartment_id DataOciJmsAgentInstallers#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#fleet_id DataOciJmsAgentInstallers#fleet_id}
  */
  readonly fleetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#id DataOciJmsAgentInstallers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#os_family DataOciJmsAgentInstallers#os_family}
  */
  readonly osFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#platform_architecture DataOciJmsAgentInstallers#platform_architecture}
  */
  readonly platformArchitecture?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#filter DataOciJmsAgentInstallers#filter}
  */
  readonly filter?: DataOciJmsAgentInstallersFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsAgentInstallersAgentInstallerCollectionItems {
}

export function dataOciJmsAgentInstallersAgentInstallerCollectionItemsToTerraform(struct?: DataOciJmsAgentInstallersAgentInstallerCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsAgentInstallersAgentInstallerCollectionItemsToHclTerraform(struct?: DataOciJmsAgentInstallersAgentInstallerCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsAgentInstallersAgentInstallerCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsAgentInstallersAgentInstallerCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_installer_description - computed: true, optional: false, required: false
  public get agentInstallerDescription() {
    return this.getStringAttribute('agent_installer_description');
  }

  // agent_installer_id - computed: true, optional: false, required: false
  public get agentInstallerId() {
    return this.getStringAttribute('agent_installer_id');
  }

  // agent_installer_version - computed: true, optional: false, required: false
  public get agentInstallerVersion() {
    return this.getStringAttribute('agent_installer_version');
  }

  // agent_version - computed: true, optional: false, required: false
  public get agentVersion() {
    return this.getStringAttribute('agent_version');
  }

  // approximate_file_size_in_bytes - computed: true, optional: false, required: false
  public get approximateFileSizeInBytes() {
    return this.getStringAttribute('approximate_file_size_in_bytes');
  }

  // java_version - computed: true, optional: false, required: false
  public get javaVersion() {
    return this.getStringAttribute('java_version');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // platform_architecture - computed: true, optional: false, required: false
  public get platformArchitecture() {
    return this.getStringAttribute('platform_architecture');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataOciJmsAgentInstallersAgentInstallerCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference {
    return new DataOciJmsAgentInstallersAgentInstallerCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsAgentInstallersAgentInstallerCollection {
}

export function dataOciJmsAgentInstallersAgentInstallerCollectionToTerraform(struct?: DataOciJmsAgentInstallersAgentInstallerCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsAgentInstallersAgentInstallerCollectionToHclTerraform(struct?: DataOciJmsAgentInstallersAgentInstallerCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsAgentInstallersAgentInstallerCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsAgentInstallersAgentInstallerCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsAgentInstallersAgentInstallerCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsAgentInstallersAgentInstallerCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference {
    return new DataOciJmsAgentInstallersAgentInstallerCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsAgentInstallersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#name DataOciJmsAgentInstallers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#regex DataOciJmsAgentInstallers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#values DataOciJmsAgentInstallers#values}
  */
  readonly values: string[];
}

export function dataOciJmsAgentInstallersFilterToTerraform(struct?: DataOciJmsAgentInstallersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciJmsAgentInstallersFilterToHclTerraform(struct?: DataOciJmsAgentInstallersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciJmsAgentInstallersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsAgentInstallersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsAgentInstallersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciJmsAgentInstallersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsAgentInstallersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsAgentInstallersFilterOutputReference {
    return new DataOciJmsAgentInstallersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers oci_jms_agent_installers}
*/
export class DataOciJmsAgentInstallers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_agent_installers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsAgentInstallers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsAgentInstallers to import
  * @param importFromId The id of the existing DataOciJmsAgentInstallers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsAgentInstallers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_agent_installers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_agent_installers oci_jms_agent_installers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsAgentInstallersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsAgentInstallersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_agent_installers',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._osFamily = config.osFamily;
    this._platformArchitecture = config.platformArchitecture;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_installer_collection - computed: true, optional: false, required: false
  private _agentInstallerCollection = new DataOciJmsAgentInstallersAgentInstallerCollectionList(this, "agent_installer_collection", false);
  public get agentInstallerCollection() {
    return this._agentInstallerCollection;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // fleet_id - computed: false, optional: true, required: false
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  public resetFleetId() {
    this._fleetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // os_family - computed: false, optional: true, required: false
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  public resetOsFamily() {
    this._osFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // platform_architecture - computed: false, optional: true, required: false
  private _platformArchitecture?: string; 
  public get platformArchitecture() {
    return this.getStringAttribute('platform_architecture');
  }
  public set platformArchitecture(value: string) {
    this._platformArchitecture = value;
  }
  public resetPlatformArchitecture() {
    this._platformArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformArchitectureInput() {
    return this._platformArchitecture;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsAgentInstallersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsAgentInstallersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      os_family: cdktf.stringToTerraform(this._osFamily),
      platform_architecture: cdktf.stringToTerraform(this._platformArchitecture),
      filter: cdktf.listMapper(dataOciJmsAgentInstallersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_architecture: {
        value: cdktf.stringToHclTerraform(this._platformArchitecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsAgentInstallersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsAgentInstallersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
