// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OwnershipTeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#description OwnershipTeams#description}
  */
  readonly description?: string;
  /**
  * This field should only be used for the automation purpose when importing team information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#external_id OwnershipTeams#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#id OwnershipTeams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The team identifier is used to reference the team from any entity in Dynatrace. If you are using Kubernetes labels, keep in mind the 63 character limit that they enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#identifier OwnershipTeams#identifier}
  */
  readonly identifier: string;
  /**
  * Team name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#name OwnershipTeams#name}
  */
  readonly name: string;
  /**
  * additional_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#additional_information OwnershipTeams#additional_information}
  */
  readonly additionalInformation?: OwnershipTeamsAdditionalInformation;
  /**
  * contact_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#contact_details OwnershipTeams#contact_details}
  */
  readonly contactDetails?: OwnershipTeamsContactDetails;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#links OwnershipTeams#links}
  */
  readonly links?: OwnershipTeamsLinks;
  /**
  * responsibilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#responsibilities OwnershipTeams#responsibilities}
  */
  readonly responsibilities: OwnershipTeamsResponsibilities;
  /**
  * supplementary_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#supplementary_identifiers OwnershipTeams#supplementary_identifiers}
  */
  readonly supplementaryIdentifiers?: OwnershipTeamsSupplementaryIdentifiers;
}
export interface OwnershipTeamsAdditionalInformationAdditionalInformation {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#key OwnershipTeams#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#url OwnershipTeams#url}
  */
  readonly url?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#value OwnershipTeams#value}
  */
  readonly value: string;
}

export function ownershipTeamsAdditionalInformationAdditionalInformationToTerraform(struct?: OwnershipTeamsAdditionalInformationAdditionalInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    url: cdktf.stringToTerraform(struct!.url),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ownershipTeamsAdditionalInformationAdditionalInformationToHclTerraform(struct?: OwnershipTeamsAdditionalInformationAdditionalInformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsAdditionalInformationAdditionalInformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OwnershipTeamsAdditionalInformationAdditionalInformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsAdditionalInformationAdditionalInformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._url = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._url = value.url;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OwnershipTeamsAdditionalInformationAdditionalInformationList extends cdktf.ComplexList {
  public internalValue? : OwnershipTeamsAdditionalInformationAdditionalInformation[] | cdktf.IResolvable

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
  public get(index: number): OwnershipTeamsAdditionalInformationAdditionalInformationOutputReference {
    return new OwnershipTeamsAdditionalInformationAdditionalInformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OwnershipTeamsAdditionalInformation {
  /**
  * additional_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#additional_information OwnershipTeams#additional_information}
  */
  readonly additionalInformation: OwnershipTeamsAdditionalInformationAdditionalInformation[] | cdktf.IResolvable;
}

export function ownershipTeamsAdditionalInformationToTerraform(struct?: OwnershipTeamsAdditionalInformationOutputReference | OwnershipTeamsAdditionalInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_information: cdktf.listMapper(ownershipTeamsAdditionalInformationAdditionalInformationToTerraform, true)(struct!.additionalInformation),
  }
}


export function ownershipTeamsAdditionalInformationToHclTerraform(struct?: OwnershipTeamsAdditionalInformationOutputReference | OwnershipTeamsAdditionalInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_information: {
      value: cdktf.listMapperHcl(ownershipTeamsAdditionalInformationAdditionalInformationToHclTerraform, true)(struct!.additionalInformation),
      isBlock: true,
      type: "list",
      storageClassType: "OwnershipTeamsAdditionalInformationAdditionalInformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsAdditionalInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsAdditionalInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalInformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalInformation = this._additionalInformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsAdditionalInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalInformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalInformation.internalValue = value.additionalInformation;
    }
  }

  // additional_information - computed: false, optional: false, required: true
  private _additionalInformation = new OwnershipTeamsAdditionalInformationAdditionalInformationList(this, "additional_information", false);
  public get additionalInformation() {
    return this._additionalInformation;
  }
  public putAdditionalInformation(value: OwnershipTeamsAdditionalInformationAdditionalInformation[] | cdktf.IResolvable) {
    this._additionalInformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation.internalValue;
  }
}
export interface OwnershipTeamsContactDetailsContactDetailJira {
  /**
  * Default Assignee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#default_assignee OwnershipTeams#default_assignee}
  */
  readonly defaultAssignee: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#project OwnershipTeams#project}
  */
  readonly project: string;
}

export function ownershipTeamsContactDetailsContactDetailJiraToTerraform(struct?: OwnershipTeamsContactDetailsContactDetailJiraOutputReference | OwnershipTeamsContactDetailsContactDetailJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_assignee: cdktf.stringToTerraform(struct!.defaultAssignee),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function ownershipTeamsContactDetailsContactDetailJiraToHclTerraform(struct?: OwnershipTeamsContactDetailsContactDetailJiraOutputReference | OwnershipTeamsContactDetailsContactDetailJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_assignee: {
      value: cdktf.stringToHclTerraform(struct!.defaultAssignee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsContactDetailsContactDetailJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsContactDetailsContactDetailJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAssignee !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAssignee = this._defaultAssignee;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsContactDetailsContactDetailJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAssignee = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAssignee = value.defaultAssignee;
      this._project = value.project;
    }
  }

  // default_assignee - computed: false, optional: false, required: true
  private _defaultAssignee?: string; 
  public get defaultAssignee() {
    return this.getStringAttribute('default_assignee');
  }
  public set defaultAssignee(value: string) {
    this._defaultAssignee = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAssigneeInput() {
    return this._defaultAssignee;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface OwnershipTeamsContactDetailsContactDetail {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#email OwnershipTeams#email}
  */
  readonly email?: string;
  /**
  * Possible Values: `EMAIL`, `JIRA`, `MS_TEAMS`, `SLACK`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#integration_type OwnershipTeams#integration_type}
  */
  readonly integrationType: string;
  /**
  * Team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#ms_teams OwnershipTeams#ms_teams}
  */
  readonly msTeams?: string;
  /**
  * Channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#slack_channel OwnershipTeams#slack_channel}
  */
  readonly slackChannel?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#url OwnershipTeams#url}
  */
  readonly url?: string;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#jira OwnershipTeams#jira}
  */
  readonly jira?: OwnershipTeamsContactDetailsContactDetailJira;
}

export function ownershipTeamsContactDetailsContactDetailToTerraform(struct?: OwnershipTeamsContactDetailsContactDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    ms_teams: cdktf.stringToTerraform(struct!.msTeams),
    slack_channel: cdktf.stringToTerraform(struct!.slackChannel),
    url: cdktf.stringToTerraform(struct!.url),
    jira: ownershipTeamsContactDetailsContactDetailJiraToTerraform(struct!.jira),
  }
}


export function ownershipTeamsContactDetailsContactDetailToHclTerraform(struct?: OwnershipTeamsContactDetailsContactDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_teams: {
      value: cdktf.stringToHclTerraform(struct!.msTeams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack_channel: {
      value: cdktf.stringToHclTerraform(struct!.slackChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jira: {
      value: ownershipTeamsContactDetailsContactDetailJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "list",
      storageClassType: "OwnershipTeamsContactDetailsContactDetailJiraList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsContactDetailsContactDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OwnershipTeamsContactDetailsContactDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._msTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.msTeams = this._msTeams;
    }
    if (this._slackChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackChannel = this._slackChannel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsContactDetailsContactDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._integrationType = undefined;
      this._msTeams = undefined;
      this._slackChannel = undefined;
      this._url = undefined;
      this._jira.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._integrationType = value.integrationType;
      this._msTeams = value.msTeams;
      this._slackChannel = value.slackChannel;
      this._url = value.url;
      this._jira.internalValue = value.jira;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // ms_teams - computed: false, optional: true, required: false
  private _msTeams?: string; 
  public get msTeams() {
    return this.getStringAttribute('ms_teams');
  }
  public set msTeams(value: string) {
    this._msTeams = value;
  }
  public resetMsTeams() {
    this._msTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTeamsInput() {
    return this._msTeams;
  }

  // slack_channel - computed: false, optional: true, required: false
  private _slackChannel?: string; 
  public get slackChannel() {
    return this.getStringAttribute('slack_channel');
  }
  public set slackChannel(value: string) {
    this._slackChannel = value;
  }
  public resetSlackChannel() {
    this._slackChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new OwnershipTeamsContactDetailsContactDetailJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: OwnershipTeamsContactDetailsContactDetailJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }
}

export class OwnershipTeamsContactDetailsContactDetailList extends cdktf.ComplexList {
  public internalValue? : OwnershipTeamsContactDetailsContactDetail[] | cdktf.IResolvable

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
  public get(index: number): OwnershipTeamsContactDetailsContactDetailOutputReference {
    return new OwnershipTeamsContactDetailsContactDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OwnershipTeamsContactDetails {
  /**
  * contact_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#contact_detail OwnershipTeams#contact_detail}
  */
  readonly contactDetail: OwnershipTeamsContactDetailsContactDetail[] | cdktf.IResolvable;
}

export function ownershipTeamsContactDetailsToTerraform(struct?: OwnershipTeamsContactDetailsOutputReference | OwnershipTeamsContactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_detail: cdktf.listMapper(ownershipTeamsContactDetailsContactDetailToTerraform, true)(struct!.contactDetail),
  }
}


export function ownershipTeamsContactDetailsToHclTerraform(struct?: OwnershipTeamsContactDetailsOutputReference | OwnershipTeamsContactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_detail: {
      value: cdktf.listMapperHcl(ownershipTeamsContactDetailsContactDetailToHclTerraform, true)(struct!.contactDetail),
      isBlock: true,
      type: "list",
      storageClassType: "OwnershipTeamsContactDetailsContactDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsContactDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsContactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactDetail = this._contactDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsContactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactDetail.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactDetail.internalValue = value.contactDetail;
    }
  }

  // contact_detail - computed: false, optional: false, required: true
  private _contactDetail = new OwnershipTeamsContactDetailsContactDetailList(this, "contact_detail", false);
  public get contactDetail() {
    return this._contactDetail;
  }
  public putContactDetail(value: OwnershipTeamsContactDetailsContactDetail[] | cdktf.IResolvable) {
    this._contactDetail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactDetailInput() {
    return this._contactDetail.internalValue;
  }
}
export interface OwnershipTeamsLinksLink {
  /**
  * Possible Values: `DASHBOARD`, `DOCUMENTATION`, `HEALTH_APP`, `REPOSITORY`, `RUNBOOK`, `URL`, `WIKI`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#link_type OwnershipTeams#link_type}
  */
  readonly linkType: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#url OwnershipTeams#url}
  */
  readonly url: string;
}

export function ownershipTeamsLinksLinkToTerraform(struct?: OwnershipTeamsLinksLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_type: cdktf.stringToTerraform(struct!.linkType),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ownershipTeamsLinksLinkToHclTerraform(struct?: OwnershipTeamsLinksLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsLinksLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OwnershipTeamsLinksLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsLinksLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkType = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkType = value.linkType;
      this._url = value.url;
    }
  }

  // link_type - computed: false, optional: false, required: true
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class OwnershipTeamsLinksLinkList extends cdktf.ComplexList {
  public internalValue? : OwnershipTeamsLinksLink[] | cdktf.IResolvable

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
  public get(index: number): OwnershipTeamsLinksLinkOutputReference {
    return new OwnershipTeamsLinksLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OwnershipTeamsLinks {
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#link OwnershipTeams#link}
  */
  readonly link: OwnershipTeamsLinksLink[] | cdktf.IResolvable;
}

export function ownershipTeamsLinksToTerraform(struct?: OwnershipTeamsLinksOutputReference | OwnershipTeamsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link: cdktf.listMapper(ownershipTeamsLinksLinkToTerraform, true)(struct!.link),
  }
}


export function ownershipTeamsLinksToHclTerraform(struct?: OwnershipTeamsLinksOutputReference | OwnershipTeamsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link: {
      value: cdktf.listMapperHcl(ownershipTeamsLinksLinkToHclTerraform, true)(struct!.link),
      isBlock: true,
      type: "list",
      storageClassType: "OwnershipTeamsLinksLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._link?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._link.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._link.internalValue = value.link;
    }
  }

  // link - computed: false, optional: false, required: true
  private _link = new OwnershipTeamsLinksLinkList(this, "link", false);
  public get link() {
    return this._link;
  }
  public putLink(value: OwnershipTeamsLinksLink[] | cdktf.IResolvable) {
    this._link.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }
}
export interface OwnershipTeamsResponsibilities {
  /**
  * Responsible for developing and maintaining high quality software. Development teams are responsible for making code changes to address performance regressions, errors, or security vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#development OwnershipTeams#development}
  */
  readonly development: boolean | cdktf.IResolvable;
  /**
  * Responsible for the administration, management, and support of the IT infrastructure including physical servers, virtualization, and cloud. Teams with infrastructure responsibility are responsible for addressing hardware issues, resource limits, and operating system vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#infrastructure OwnershipTeams#infrastructure}
  */
  readonly infrastructure: boolean | cdktf.IResolvable;
  /**
  * Responsible for ensuring that applications in development align with business needs and meet the usability requirements of users, stakeholders, customers, and external partners. Teams with line of business responsibility are responsible for understanding the customer experience and how it affects business goals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#line_of_business OwnershipTeams#line_of_business}
  */
  readonly lineOfBusiness: boolean | cdktf.IResolvable;
  /**
  * Responsible for deploying and managing software, with a focus on high availability and performance. Teams with operations responsibilities needs to understand the impact, priority, and team responsible for addressing problems detected by Dynatrace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#operations OwnershipTeams#operations}
  */
  readonly operations: boolean | cdktf.IResolvable;
  /**
  * Responsible for the security posture of the organization. Teams with security responsibility must understand the impact, priority, and team responsible for addressing security vulnerabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#security OwnershipTeams#security}
  */
  readonly security: boolean | cdktf.IResolvable;
}

export function ownershipTeamsResponsibilitiesToTerraform(struct?: OwnershipTeamsResponsibilitiesOutputReference | OwnershipTeamsResponsibilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    development: cdktf.booleanToTerraform(struct!.development),
    infrastructure: cdktf.booleanToTerraform(struct!.infrastructure),
    line_of_business: cdktf.booleanToTerraform(struct!.lineOfBusiness),
    operations: cdktf.booleanToTerraform(struct!.operations),
    security: cdktf.booleanToTerraform(struct!.security),
  }
}


export function ownershipTeamsResponsibilitiesToHclTerraform(struct?: OwnershipTeamsResponsibilitiesOutputReference | OwnershipTeamsResponsibilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    development: {
      value: cdktf.booleanToHclTerraform(struct!.development),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    infrastructure: {
      value: cdktf.booleanToHclTerraform(struct!.infrastructure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    line_of_business: {
      value: cdktf.booleanToHclTerraform(struct!.lineOfBusiness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operations: {
      value: cdktf.booleanToHclTerraform(struct!.operations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security: {
      value: cdktf.booleanToHclTerraform(struct!.security),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsResponsibilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsResponsibilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._development !== undefined) {
      hasAnyValues = true;
      internalValueResult.development = this._development;
    }
    if (this._infrastructure !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure;
    }
    if (this._lineOfBusiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineOfBusiness = this._lineOfBusiness;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsResponsibilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._development = undefined;
      this._infrastructure = undefined;
      this._lineOfBusiness = undefined;
      this._operations = undefined;
      this._security = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._development = value.development;
      this._infrastructure = value.infrastructure;
      this._lineOfBusiness = value.lineOfBusiness;
      this._operations = value.operations;
      this._security = value.security;
    }
  }

  // development - computed: false, optional: false, required: true
  private _development?: boolean | cdktf.IResolvable; 
  public get development() {
    return this.getBooleanAttribute('development');
  }
  public set development(value: boolean | cdktf.IResolvable) {
    this._development = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentInput() {
    return this._development;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure?: boolean | cdktf.IResolvable; 
  public get infrastructure() {
    return this.getBooleanAttribute('infrastructure');
  }
  public set infrastructure(value: boolean | cdktf.IResolvable) {
    this._infrastructure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure;
  }

  // line_of_business - computed: false, optional: false, required: true
  private _lineOfBusiness?: boolean | cdktf.IResolvable; 
  public get lineOfBusiness() {
    return this.getBooleanAttribute('line_of_business');
  }
  public set lineOfBusiness(value: boolean | cdktf.IResolvable) {
    this._lineOfBusiness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineOfBusinessInput() {
    return this._lineOfBusiness;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: boolean | cdktf.IResolvable; 
  public get operations() {
    return this.getBooleanAttribute('operations');
  }
  public set operations(value: boolean | cdktf.IResolvable) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // security - computed: false, optional: false, required: true
  private _security?: boolean | cdktf.IResolvable; 
  public get security() {
    return this.getBooleanAttribute('security');
  }
  public set security(value: boolean | cdktf.IResolvable) {
    this._security = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }
}
export interface OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier {
  /**
  * Supplementary Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#supplementary_identifier OwnershipTeams#supplementary_identifier}
  */
  readonly supplementaryIdentifier: string;
}

export function ownershipTeamsSupplementaryIdentifiersSupplementaryIdentifierToTerraform(struct?: OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    supplementary_identifier: cdktf.stringToTerraform(struct!.supplementaryIdentifier),
  }
}


export function ownershipTeamsSupplementaryIdentifiersSupplementaryIdentifierToHclTerraform(struct?: OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    supplementary_identifier: {
      value: cdktf.stringToHclTerraform(struct!.supplementaryIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supplementaryIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementaryIdentifier = this._supplementaryIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._supplementaryIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._supplementaryIdentifier = value.supplementaryIdentifier;
    }
  }

  // supplementary_identifier - computed: false, optional: false, required: true
  private _supplementaryIdentifier?: string; 
  public get supplementaryIdentifier() {
    return this.getStringAttribute('supplementary_identifier');
  }
  public set supplementaryIdentifier(value: string) {
    this._supplementaryIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementaryIdentifierInput() {
    return this._supplementaryIdentifier;
  }
}

export class OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierList extends cdktf.ComplexList {
  public internalValue? : OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier[] | cdktf.IResolvable

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
  public get(index: number): OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierOutputReference {
    return new OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OwnershipTeamsSupplementaryIdentifiers {
  /**
  * supplementary_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#supplementary_identifier OwnershipTeams#supplementary_identifier}
  */
  readonly supplementaryIdentifier: OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier[] | cdktf.IResolvable;
}

export function ownershipTeamsSupplementaryIdentifiersToTerraform(struct?: OwnershipTeamsSupplementaryIdentifiersOutputReference | OwnershipTeamsSupplementaryIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    supplementary_identifier: cdktf.listMapper(ownershipTeamsSupplementaryIdentifiersSupplementaryIdentifierToTerraform, true)(struct!.supplementaryIdentifier),
  }
}


export function ownershipTeamsSupplementaryIdentifiersToHclTerraform(struct?: OwnershipTeamsSupplementaryIdentifiersOutputReference | OwnershipTeamsSupplementaryIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    supplementary_identifier: {
      value: cdktf.listMapperHcl(ownershipTeamsSupplementaryIdentifiersSupplementaryIdentifierToHclTerraform, true)(struct!.supplementaryIdentifier),
      isBlock: true,
      type: "set",
      storageClassType: "OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OwnershipTeamsSupplementaryIdentifiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OwnershipTeamsSupplementaryIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supplementaryIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementaryIdentifier = this._supplementaryIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OwnershipTeamsSupplementaryIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._supplementaryIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._supplementaryIdentifier.internalValue = value.supplementaryIdentifier;
    }
  }

  // supplementary_identifier - computed: false, optional: false, required: true
  private _supplementaryIdentifier = new OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifierList(this, "supplementary_identifier", true);
  public get supplementaryIdentifier() {
    return this._supplementaryIdentifier;
  }
  public putSupplementaryIdentifier(value: OwnershipTeamsSupplementaryIdentifiersSupplementaryIdentifier[] | cdktf.IResolvable) {
    this._supplementaryIdentifier.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementaryIdentifierInput() {
    return this._supplementaryIdentifier.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams dynatrace_ownership_teams}
*/
export class OwnershipTeams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_ownership_teams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OwnershipTeams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OwnershipTeams to import
  * @param importFromId The id of the existing OwnershipTeams that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OwnershipTeams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_ownership_teams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/ownership_teams dynatrace_ownership_teams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OwnershipTeamsConfig
  */
  public constructor(scope: Construct, id: string, config: OwnershipTeamsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_ownership_teams',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._externalId = config.externalId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._additionalInformation.internalValue = config.additionalInformation;
    this._contactDetails.internalValue = config.contactDetails;
    this._links.internalValue = config.links;
    this._responsibilities.internalValue = config.responsibilities;
    this._supplementaryIdentifiers.internalValue = config.supplementaryIdentifiers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // additional_information - computed: false, optional: true, required: false
  private _additionalInformation = new OwnershipTeamsAdditionalInformationOutputReference(this, "additional_information");
  public get additionalInformation() {
    return this._additionalInformation;
  }
  public putAdditionalInformation(value: OwnershipTeamsAdditionalInformation) {
    this._additionalInformation.internalValue = value;
  }
  public resetAdditionalInformation() {
    this._additionalInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInformationInput() {
    return this._additionalInformation.internalValue;
  }

  // contact_details - computed: false, optional: true, required: false
  private _contactDetails = new OwnershipTeamsContactDetailsOutputReference(this, "contact_details");
  public get contactDetails() {
    return this._contactDetails;
  }
  public putContactDetails(value: OwnershipTeamsContactDetails) {
    this._contactDetails.internalValue = value;
  }
  public resetContactDetails() {
    this._contactDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactDetailsInput() {
    return this._contactDetails.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new OwnershipTeamsLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }
  public putLinks(value: OwnershipTeamsLinks) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // responsibilities - computed: false, optional: false, required: true
  private _responsibilities = new OwnershipTeamsResponsibilitiesOutputReference(this, "responsibilities");
  public get responsibilities() {
    return this._responsibilities;
  }
  public putResponsibilities(value: OwnershipTeamsResponsibilities) {
    this._responsibilities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibilitiesInput() {
    return this._responsibilities.internalValue;
  }

  // supplementary_identifiers - computed: false, optional: true, required: false
  private _supplementaryIdentifiers = new OwnershipTeamsSupplementaryIdentifiersOutputReference(this, "supplementary_identifiers");
  public get supplementaryIdentifiers() {
    return this._supplementaryIdentifiers;
  }
  public putSupplementaryIdentifiers(value: OwnershipTeamsSupplementaryIdentifiers) {
    this._supplementaryIdentifiers.internalValue = value;
  }
  public resetSupplementaryIdentifiers() {
    this._supplementaryIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementaryIdentifiersInput() {
    return this._supplementaryIdentifiers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      additional_information: ownershipTeamsAdditionalInformationToTerraform(this._additionalInformation.internalValue),
      contact_details: ownershipTeamsContactDetailsToTerraform(this._contactDetails.internalValue),
      links: ownershipTeamsLinksToTerraform(this._links.internalValue),
      responsibilities: ownershipTeamsResponsibilitiesToTerraform(this._responsibilities.internalValue),
      supplementary_identifiers: ownershipTeamsSupplementaryIdentifiersToTerraform(this._supplementaryIdentifiers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      additional_information: {
        value: ownershipTeamsAdditionalInformationToHclTerraform(this._additionalInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipTeamsAdditionalInformationList",
      },
      contact_details: {
        value: ownershipTeamsContactDetailsToHclTerraform(this._contactDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipTeamsContactDetailsList",
      },
      links: {
        value: ownershipTeamsLinksToHclTerraform(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipTeamsLinksList",
      },
      responsibilities: {
        value: ownershipTeamsResponsibilitiesToHclTerraform(this._responsibilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipTeamsResponsibilitiesList",
      },
      supplementary_identifiers: {
        value: ownershipTeamsSupplementaryIdentifiersToHclTerraform(this._supplementaryIdentifiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OwnershipTeamsSupplementaryIdentifiersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
