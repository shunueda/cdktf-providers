// https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwingateResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Returns only resources that exactly match this name. If no options are passed it will return all resources. Only one option can be used at a time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name DataTwingateResources#name}
  */
  readonly name?: string;
  /**
  * Match when the value exist in the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name_contains DataTwingateResources#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Match when the exact value does not exist in the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name_exclude DataTwingateResources#name_exclude}
  */
  readonly nameExclude?: string;
  /**
  * The name of the resource must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name_prefix DataTwingateResources#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The regular expression match of the name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name_regexp DataTwingateResources#name_regexp}
  */
  readonly nameRegexp?: string;
  /**
  * The name of the resource must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#name_suffix DataTwingateResources#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Returns only resources that exactly match the given tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#tags DataTwingateResources#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataTwingateResourcesResourcesProtocolsTcp {
}

export function dataTwingateResourcesResourcesProtocolsTcpToTerraform(struct?: DataTwingateResourcesResourcesProtocolsTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateResourcesResourcesProtocolsTcpToHclTerraform(struct?: DataTwingateResourcesResourcesProtocolsTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateResourcesResourcesProtocolsTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateResourcesResourcesProtocolsTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateResourcesResourcesProtocolsTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
}
export interface DataTwingateResourcesResourcesProtocolsUdp {
}

export function dataTwingateResourcesResourcesProtocolsUdpToTerraform(struct?: DataTwingateResourcesResourcesProtocolsUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateResourcesResourcesProtocolsUdpToHclTerraform(struct?: DataTwingateResourcesResourcesProtocolsUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateResourcesResourcesProtocolsUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateResourcesResourcesProtocolsUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateResourcesResourcesProtocolsUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
}
export interface DataTwingateResourcesResourcesProtocols {
}

export function dataTwingateResourcesResourcesProtocolsToTerraform(struct?: DataTwingateResourcesResourcesProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateResourcesResourcesProtocolsToHclTerraform(struct?: DataTwingateResourcesResourcesProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateResourcesResourcesProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateResourcesResourcesProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateResourcesResourcesProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_icmp - computed: true, optional: false, required: false
  public get allowIcmp() {
    return this.getBooleanAttribute('allow_icmp');
  }

  // tcp - computed: true, optional: false, required: false
  private _tcp = new DataTwingateResourcesResourcesProtocolsTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }

  // udp - computed: true, optional: false, required: false
  private _udp = new DataTwingateResourcesResourcesProtocolsUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
}
export interface DataTwingateResourcesResources {
}

export function dataTwingateResourcesResourcesToTerraform(struct?: DataTwingateResourcesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateResourcesResourcesToHclTerraform(struct?: DataTwingateResourcesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateResourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTwingateResourcesResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateResourcesResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // approval_mode - computed: true, optional: false, required: false
  public get approvalMode() {
    return this.getStringAttribute('approval_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocols - computed: true, optional: false, required: false
  private _protocols = new DataTwingateResourcesResourcesProtocolsOutputReference(this, "protocols");
  public get protocols() {
    return this._protocols;
  }

  // remote_network_id - computed: true, optional: false, required: false
  public get remoteNetworkId() {
    return this.getStringAttribute('remote_network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // usage_based_autolock_duration_days - computed: true, optional: false, required: false
  public get usageBasedAutolockDurationDays() {
    return this.getNumberAttribute('usage_based_autolock_duration_days');
  }
}

export class DataTwingateResourcesResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataTwingateResourcesResourcesOutputReference {
    return new DataTwingateResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources twingate_resources}
*/
export class DataTwingateResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwingateResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwingateResources to import
  * @param importFromId The id of the existing DataTwingateResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwingateResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/data-sources/resources twingate_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwingateResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwingateResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twingate_resources',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._nameContains = config.nameContains;
    this._nameExclude = config.nameExclude;
    this._namePrefix = config.namePrefix;
    this._nameRegexp = config.nameRegexp;
    this._nameSuffix = config.nameSuffix;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_contains - computed: false, optional: true, required: false
  private _nameContains?: string; 
  public get nameContains() {
    return this.getStringAttribute('name_contains');
  }
  public set nameContains(value: string) {
    this._nameContains = value;
  }
  public resetNameContains() {
    this._nameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameContainsInput() {
    return this._nameContains;
  }

  // name_exclude - computed: false, optional: true, required: false
  private _nameExclude?: string; 
  public get nameExclude() {
    return this.getStringAttribute('name_exclude');
  }
  public set nameExclude(value: string) {
    this._nameExclude = value;
  }
  public resetNameExclude() {
    this._nameExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameExcludeInput() {
    return this._nameExclude;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_regexp - computed: false, optional: true, required: false
  private _nameRegexp?: string; 
  public get nameRegexp() {
    return this.getStringAttribute('name_regexp');
  }
  public set nameRegexp(value: string) {
    this._nameRegexp = value;
  }
  public resetNameRegexp() {
    this._nameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexpInput() {
    return this._nameRegexp;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataTwingateResourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      name_contains: cdktf.stringToTerraform(this._nameContains),
      name_exclude: cdktf.stringToTerraform(this._nameExclude),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      name_regexp: cdktf.stringToTerraform(this._nameRegexp),
      name_suffix: cdktf.stringToTerraform(this._nameSuffix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_contains: {
        value: cdktf.stringToHclTerraform(this._nameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_exclude: {
        value: cdktf.stringToHclTerraform(this._nameExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regexp: {
        value: cdktf.stringToHclTerraform(this._nameRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_suffix: {
        value: cdktf.stringToHclTerraform(this._nameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
