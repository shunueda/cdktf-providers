// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#config_space ServerGroup#config_space}
  */
  readonly configSpace?: string;
  /**
  * This field is the description of the server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#description ServerGroup#description}
  */
  readonly description?: string;
  /**
  * This field controls dynamic discovery of the servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#dynamic_discovery ServerGroup#dynamic_discovery}
  */
  readonly dynamicDiscovery?: boolean | cdktf.IResolvable;
  /**
  * This field defines if the server group is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#enabled ServerGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable extranet for this policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#extranet_enabled ServerGroup#extranet_enabled}
  */
  readonly extranetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#ip_anchored ServerGroup#ip_anchored}
  */
  readonly ipAnchored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#microtenant_id ServerGroup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This field defines the name of the server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#name ServerGroup#name}
  */
  readonly name: string;
  /**
  * app_connector_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#app_connector_groups ServerGroup#app_connector_groups}
  */
  readonly appConnectorGroups?: ServerGroupAppConnectorGroups[] | cdktf.IResolvable;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#applications ServerGroup#applications}
  */
  readonly applications?: ServerGroupApplications[] | cdktf.IResolvable;
  /**
  * extranet_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#extranet_dto ServerGroup#extranet_dto}
  */
  readonly extranetDto?: ServerGroupExtranetDto[] | cdktf.IResolvable;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#servers ServerGroup#servers}
  */
  readonly servers?: ServerGroupServers[] | cdktf.IResolvable;
}
export interface ServerGroupAppConnectorGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function serverGroupAppConnectorGroupsToTerraform(struct?: ServerGroupAppConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function serverGroupAppConnectorGroupsToHclTerraform(struct?: ServerGroupAppConnectorGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupAppConnectorGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupAppConnectorGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupAppConnectorGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ServerGroupAppConnectorGroupsList extends cdktf.ComplexList {
  public internalValue? : ServerGroupAppConnectorGroups[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupAppConnectorGroupsOutputReference {
    return new ServerGroupAppConnectorGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerGroupApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function serverGroupApplicationsToTerraform(struct?: ServerGroupApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function serverGroupApplicationsToHclTerraform(struct?: ServerGroupApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ServerGroupApplicationsList extends cdktf.ComplexList {
  public internalValue? : ServerGroupApplications[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupApplicationsOutputReference {
    return new ServerGroupApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerGroupExtranetDtoLocationDto {
  /**
  * Location ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverGroupExtranetDtoLocationDtoToTerraform(struct?: ServerGroupExtranetDtoLocationDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverGroupExtranetDtoLocationDtoToHclTerraform(struct?: ServerGroupExtranetDtoLocationDto | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupExtranetDtoLocationDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupExtranetDtoLocationDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupExtranetDtoLocationDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class ServerGroupExtranetDtoLocationDtoList extends cdktf.ComplexList {
  public internalValue? : ServerGroupExtranetDtoLocationDto[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupExtranetDtoLocationDtoOutputReference {
    return new ServerGroupExtranetDtoLocationDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerGroupExtranetDtoLocationGroupDto {
  /**
  * Location Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverGroupExtranetDtoLocationGroupDtoToTerraform(struct?: ServerGroupExtranetDtoLocationGroupDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverGroupExtranetDtoLocationGroupDtoToHclTerraform(struct?: ServerGroupExtranetDtoLocationGroupDto | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupExtranetDtoLocationGroupDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupExtranetDtoLocationGroupDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupExtranetDtoLocationGroupDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class ServerGroupExtranetDtoLocationGroupDtoList extends cdktf.ComplexList {
  public internalValue? : ServerGroupExtranetDtoLocationGroupDto[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupExtranetDtoLocationGroupDtoOutputReference {
    return new ServerGroupExtranetDtoLocationGroupDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerGroupExtranetDto {
  /**
  * ZPN Extranet Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#zpn_er_id ServerGroup#zpn_er_id}
  */
  readonly zpnErId?: string;
  /**
  * location_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#location_dto ServerGroup#location_dto}
  */
  readonly locationDto?: ServerGroupExtranetDtoLocationDto[] | cdktf.IResolvable;
  /**
  * location_group_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#location_group_dto ServerGroup#location_group_dto}
  */
  readonly locationGroupDto?: ServerGroupExtranetDtoLocationGroupDto[] | cdktf.IResolvable;
}

export function serverGroupExtranetDtoToTerraform(struct?: ServerGroupExtranetDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zpn_er_id: cdktf.stringToTerraform(struct!.zpnErId),
    location_dto: cdktf.listMapper(serverGroupExtranetDtoLocationDtoToTerraform, true)(struct!.locationDto),
    location_group_dto: cdktf.listMapper(serverGroupExtranetDtoLocationGroupDtoToTerraform, true)(struct!.locationGroupDto),
  }
}


export function serverGroupExtranetDtoToHclTerraform(struct?: ServerGroupExtranetDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zpn_er_id: {
      value: cdktf.stringToHclTerraform(struct!.zpnErId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_dto: {
      value: cdktf.listMapperHcl(serverGroupExtranetDtoLocationDtoToHclTerraform, true)(struct!.locationDto),
      isBlock: true,
      type: "list",
      storageClassType: "ServerGroupExtranetDtoLocationDtoList",
    },
    location_group_dto: {
      value: cdktf.listMapperHcl(serverGroupExtranetDtoLocationGroupDtoToHclTerraform, true)(struct!.locationGroupDto),
      isBlock: true,
      type: "list",
      storageClassType: "ServerGroupExtranetDtoLocationGroupDtoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupExtranetDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupExtranetDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zpnErId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zpnErId = this._zpnErId;
    }
    if (this._locationDto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationDto = this._locationDto?.internalValue;
    }
    if (this._locationGroupDto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationGroupDto = this._locationGroupDto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupExtranetDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zpnErId = undefined;
      this._locationDto.internalValue = undefined;
      this._locationGroupDto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zpnErId = value.zpnErId;
      this._locationDto.internalValue = value.locationDto;
      this._locationGroupDto.internalValue = value.locationGroupDto;
    }
  }

  // zpn_er_id - computed: false, optional: true, required: false
  private _zpnErId?: string; 
  public get zpnErId() {
    return this.getStringAttribute('zpn_er_id');
  }
  public set zpnErId(value: string) {
    this._zpnErId = value;
  }
  public resetZpnErId() {
    this._zpnErId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnErIdInput() {
    return this._zpnErId;
  }

  // location_dto - computed: false, optional: true, required: false
  private _locationDto = new ServerGroupExtranetDtoLocationDtoList(this, "location_dto", false);
  public get locationDto() {
    return this._locationDto;
  }
  public putLocationDto(value: ServerGroupExtranetDtoLocationDto[] | cdktf.IResolvable) {
    this._locationDto.internalValue = value;
  }
  public resetLocationDto() {
    this._locationDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationDtoInput() {
    return this._locationDto.internalValue;
  }

  // location_group_dto - computed: false, optional: true, required: false
  private _locationGroupDto = new ServerGroupExtranetDtoLocationGroupDtoList(this, "location_group_dto", false);
  public get locationGroupDto() {
    return this._locationGroupDto;
  }
  public putLocationGroupDto(value: ServerGroupExtranetDtoLocationGroupDto[] | cdktf.IResolvable) {
    this._locationGroupDto.internalValue = value;
  }
  public resetLocationGroupDto() {
    this._locationGroupDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupDtoInput() {
    return this._locationGroupDto.internalValue;
  }
}

export class ServerGroupExtranetDtoList extends cdktf.ComplexList {
  public internalValue? : ServerGroupExtranetDto[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupExtranetDtoOutputReference {
    return new ServerGroupExtranetDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerGroupServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#id ServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function serverGroupServersToTerraform(struct?: ServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function serverGroupServersToHclTerraform(struct?: ServerGroupServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerGroupServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGroupServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGroupServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ServerGroupServersList extends cdktf.ComplexList {
  public internalValue? : ServerGroupServers[] | cdktf.IResolvable

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
  public get(index: number): ServerGroupServersOutputReference {
    return new ServerGroupServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group zpa_server_group}
*/
export class ServerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerGroup to import
  * @param importFromId The id of the existing ServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/server_group zpa_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_server_group',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configSpace = config.configSpace;
    this._description = config.description;
    this._dynamicDiscovery = config.dynamicDiscovery;
    this._enabled = config.enabled;
    this._extranetEnabled = config.extranetEnabled;
    this._ipAnchored = config.ipAnchored;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._appConnectorGroups.internalValue = config.appConnectorGroups;
    this._applications.internalValue = config.applications;
    this._extranetDto.internalValue = config.extranetDto;
    this._servers.internalValue = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_space - computed: false, optional: true, required: false
  private _configSpace?: string; 
  public get configSpace() {
    return this.getStringAttribute('config_space');
  }
  public set configSpace(value: string) {
    this._configSpace = value;
  }
  public resetConfigSpace() {
    this._configSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpaceInput() {
    return this._configSpace;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dynamic_discovery - computed: false, optional: true, required: false
  private _dynamicDiscovery?: boolean | cdktf.IResolvable; 
  public get dynamicDiscovery() {
    return this.getBooleanAttribute('dynamic_discovery');
  }
  public set dynamicDiscovery(value: boolean | cdktf.IResolvable) {
    this._dynamicDiscovery = value;
  }
  public resetDynamicDiscovery() {
    this._dynamicDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDiscoveryInput() {
    return this._dynamicDiscovery;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extranet_enabled - computed: false, optional: true, required: false
  private _extranetEnabled?: boolean | cdktf.IResolvable; 
  public get extranetEnabled() {
    return this.getBooleanAttribute('extranet_enabled');
  }
  public set extranetEnabled(value: boolean | cdktf.IResolvable) {
    this._extranetEnabled = value;
  }
  public resetExtranetEnabled() {
    this._extranetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetEnabledInput() {
    return this._extranetEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_anchored - computed: false, optional: true, required: false
  private _ipAnchored?: boolean | cdktf.IResolvable; 
  public get ipAnchored() {
    return this.getBooleanAttribute('ip_anchored');
  }
  public set ipAnchored(value: boolean | cdktf.IResolvable) {
    this._ipAnchored = value;
  }
  public resetIpAnchored() {
    this._ipAnchored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnchoredInput() {
    return this._ipAnchored;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // app_connector_groups - computed: false, optional: true, required: false
  private _appConnectorGroups = new ServerGroupAppConnectorGroupsList(this, "app_connector_groups", false);
  public get appConnectorGroups() {
    return this._appConnectorGroups;
  }
  public putAppConnectorGroups(value: ServerGroupAppConnectorGroups[] | cdktf.IResolvable) {
    this._appConnectorGroups.internalValue = value;
  }
  public resetAppConnectorGroups() {
    this._appConnectorGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appConnectorGroupsInput() {
    return this._appConnectorGroups.internalValue;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new ServerGroupApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: ServerGroupApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // extranet_dto - computed: false, optional: true, required: false
  private _extranetDto = new ServerGroupExtranetDtoList(this, "extranet_dto", false);
  public get extranetDto() {
    return this._extranetDto;
  }
  public putExtranetDto(value: ServerGroupExtranetDto[] | cdktf.IResolvable) {
    this._extranetDto.internalValue = value;
  }
  public resetExtranetDto() {
    this._extranetDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetDtoInput() {
    return this._extranetDto.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new ServerGroupServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: ServerGroupServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_space: cdktf.stringToTerraform(this._configSpace),
      description: cdktf.stringToTerraform(this._description),
      dynamic_discovery: cdktf.booleanToTerraform(this._dynamicDiscovery),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extranet_enabled: cdktf.booleanToTerraform(this._extranetEnabled),
      ip_anchored: cdktf.booleanToTerraform(this._ipAnchored),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      app_connector_groups: cdktf.listMapper(serverGroupAppConnectorGroupsToTerraform, true)(this._appConnectorGroups.internalValue),
      applications: cdktf.listMapper(serverGroupApplicationsToTerraform, true)(this._applications.internalValue),
      extranet_dto: cdktf.listMapper(serverGroupExtranetDtoToTerraform, true)(this._extranetDto.internalValue),
      servers: cdktf.listMapper(serverGroupServersToTerraform, true)(this._servers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_space: {
        value: cdktf.stringToHclTerraform(this._configSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_discovery: {
        value: cdktf.booleanToHclTerraform(this._dynamicDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extranet_enabled: {
        value: cdktf.booleanToHclTerraform(this._extranetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_anchored: {
        value: cdktf.booleanToHclTerraform(this._ipAnchored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      app_connector_groups: {
        value: cdktf.listMapperHcl(serverGroupAppConnectorGroupsToHclTerraform, true)(this._appConnectorGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerGroupAppConnectorGroupsList",
      },
      applications: {
        value: cdktf.listMapperHcl(serverGroupApplicationsToHclTerraform, true)(this._applications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerGroupApplicationsList",
      },
      extranet_dto: {
        value: cdktf.listMapperHcl(serverGroupExtranetDtoToHclTerraform, true)(this._extranetDto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerGroupExtranetDtoList",
      },
      servers: {
        value: cdktf.listMapperHcl(serverGroupServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerGroupServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
