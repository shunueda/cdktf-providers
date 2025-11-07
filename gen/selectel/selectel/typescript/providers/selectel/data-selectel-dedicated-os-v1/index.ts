// https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSelectelDedicatedOsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#id DataSelectelDedicatedOsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#project_id DataSelectelDedicatedOsV1#project_id}
  */
  readonly projectId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#filter DataSelectelDedicatedOsV1#filter}
  */
  readonly filter?: DataSelectelDedicatedOsV1Filter;
}
export interface DataSelectelDedicatedOsV1Os {
}

export function dataSelectelDedicatedOsV1OsToTerraform(struct?: DataSelectelDedicatedOsV1Os): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelDedicatedOsV1OsToHclTerraform(struct?: DataSelectelDedicatedOsV1Os): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelDedicatedOsV1OsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelDedicatedOsV1Os | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelDedicatedOsV1Os | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // partitioning - computed: true, optional: false, required: false
  public get partitioning() {
    return this.getBooleanAttribute('partitioning');
  }

  // scripts_allowed - computed: true, optional: false, required: false
  public get scriptsAllowed() {
    return this.getBooleanAttribute('scripts_allowed');
  }

  // ssh_key_allowed - computed: true, optional: false, required: false
  public get sshKeyAllowed() {
    return this.getBooleanAttribute('ssh_key_allowed');
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // version_value - computed: true, optional: false, required: false
  public get versionValue() {
    return this.getStringAttribute('version_value');
  }
}

export class DataSelectelDedicatedOsV1OsList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelDedicatedOsV1OsOutputReference {
    return new DataSelectelDedicatedOsV1OsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelDedicatedOsV1Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#configuration_id DataSelectelDedicatedOsV1#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#location_id DataSelectelDedicatedOsV1#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#name DataSelectelDedicatedOsV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#version_name DataSelectelDedicatedOsV1#version_name}
  */
  readonly versionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#version_name_regex DataSelectelDedicatedOsV1#version_name_regex}
  */
  readonly versionNameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#version_value DataSelectelDedicatedOsV1#version_value}
  */
  readonly versionValue?: string;
}

export function dataSelectelDedicatedOsV1FilterToTerraform(struct?: DataSelectelDedicatedOsV1FilterOutputReference | DataSelectelDedicatedOsV1Filter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_id: cdktf.stringToTerraform(struct!.configurationId),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    name: cdktf.stringToTerraform(struct!.name),
    version_name: cdktf.stringToTerraform(struct!.versionName),
    version_name_regex: cdktf.stringToTerraform(struct!.versionNameRegex),
    version_value: cdktf.stringToTerraform(struct!.versionValue),
  }
}


export function dataSelectelDedicatedOsV1FilterToHclTerraform(struct?: DataSelectelDedicatedOsV1FilterOutputReference | DataSelectelDedicatedOsV1Filter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.configurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
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
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.versionNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_value: {
      value: cdktf.stringToHclTerraform(struct!.versionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSelectelDedicatedOsV1FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSelectelDedicatedOsV1Filter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationId = this._configurationId;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    if (this._versionNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNameRegex = this._versionNameRegex;
    }
    if (this._versionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionValue = this._versionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelDedicatedOsV1Filter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationId = undefined;
      this._locationId = undefined;
      this._name = undefined;
      this._versionName = undefined;
      this._versionNameRegex = undefined;
      this._versionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationId = value.configurationId;
      this._locationId = value.locationId;
      this._name = value.name;
      this._versionName = value.versionName;
      this._versionNameRegex = value.versionNameRegex;
      this._versionValue = value.versionValue;
    }
  }

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // location_id - computed: false, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // version_name - computed: false, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // version_name_regex - computed: false, optional: true, required: false
  private _versionNameRegex?: string; 
  public get versionNameRegex() {
    return this.getStringAttribute('version_name_regex');
  }
  public set versionNameRegex(value: string) {
    this._versionNameRegex = value;
  }
  public resetVersionNameRegex() {
    this._versionNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameRegexInput() {
    return this._versionNameRegex;
  }

  // version_value - computed: false, optional: true, required: false
  private _versionValue?: string; 
  public get versionValue() {
    return this.getStringAttribute('version_value');
  }
  public set versionValue(value: string) {
    this._versionValue = value;
  }
  public resetVersionValue() {
    this._versionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionValueInput() {
    return this._versionValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1 selectel_dedicated_os_v1}
*/
export class DataSelectelDedicatedOsV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_dedicated_os_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSelectelDedicatedOsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSelectelDedicatedOsV1 to import
  * @param importFromId The id of the existing DataSelectelDedicatedOsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSelectelDedicatedOsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_dedicated_os_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/data-sources/dedicated_os_v1 selectel_dedicated_os_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSelectelDedicatedOsV1Config
  */
  public constructor(scope: Construct, id: string, config: DataSelectelDedicatedOsV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_dedicated_os_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.1.0'
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
    this._projectId = config.projectId;
    this._filter.internalValue = config.filter;
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

  // os - computed: true, optional: false, required: false
  private _os = new DataSelectelDedicatedOsV1OsList(this, "os", false);
  public get os() {
    return this._os;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSelectelDedicatedOsV1FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSelectelDedicatedOsV1Filter) {
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
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      filter: dataSelectelDedicatedOsV1FilterToTerraform(this._filter.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataSelectelDedicatedOsV1FilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSelectelDedicatedOsV1FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
