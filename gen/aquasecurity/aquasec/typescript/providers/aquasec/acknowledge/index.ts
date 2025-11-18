// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcknowledgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A comment describing the reason for the acknowledgment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#comment Acknowledge#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#id Acknowledge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * issues block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#issues Acknowledge#issues}
  */
  readonly issues: AcknowledgeIssues[] | cdktf.IResolvable;
}
export interface AcknowledgeIssues {
  /**
  * Unique ID generated when a security issue on a resource is suppressed. It is used to remove the suppression after the expiration period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#ack_repo_id Acknowledge#ack_repo_id}
  */
  readonly ackRepoId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#docker_id Acknowledge#docker_id}
  */
  readonly dockerId?: string;
  /**
  * Number of days until expiration of the acknowledgement. The value must be integer from 1 to 999, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#expiration_days Acknowledge#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * The version of the package that having a fix for the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#fix_version Acknowledge#fix_version}
  */
  readonly fixVersion?: string;
  /**
  * Indicates whether custom severity is assigned to the suppressed vulnerability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#has_custom_severity Acknowledge#has_custom_severity}
  */
  readonly hasCustomSeverity?: boolean | cdktf.IResolvable;
  /**
  * The name of the image in whose context the issue was acknowledged (if not for all images)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#image Acknowledge#image}
  */
  readonly image?: string;
  /**
  * Only acknowledge the issue in the context of the specified image (also requires 'registry_name')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#image_name Acknowledge#image_name}
  */
  readonly imageName?: string;
  /**
  * The name of the security issue (the CVE or security advisory for vulnerabilities, name of malware or type of sensitive data)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#issue_name Acknowledge#issue_name}
  */
  readonly issueName: string;
  /**
  * The type of the security issue (either 'vulnerability', 'sensitive_data' or 'malware')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#issue_type Acknowledge#issue_type}
  */
  readonly issueType: string;
  /**
  * When the resource_type is 'package', the operating system is required (e.g., 'ubuntu', 'alpine').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#os Acknowledge#os}
  */
  readonly os?: string;
  /**
  * When the resource_type is 'package', the operating system version is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#os_version Acknowledge#os_version}
  */
  readonly osVersion?: string;
  /**
  * If the issue was acknowledged in the context of a specific image or repository, the name of the registry where they are located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#registry Acknowledge#registry}
  */
  readonly registry?: string;
  /**
  * Only acknowledge the issue in the context of the specified repository (also requires 'registry_name').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#registry_name Acknowledge#registry_name}
  */
  readonly registryName?: string;
  /**
  * The name of the repository in whose context the issue was acknowledged (if not for all images)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#repository Acknowledge#repository}
  */
  readonly repository?: string;
  /**
  * The name of the repository in whose context the issue was acknowledged (if not for all images)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#repository_name Acknowledge#repository_name}
  */
  readonly repositoryName?: string;
  /**
  * The CPE of the resource as listed in the issue by the Aqua API. This is required for resources of type 'executable'. For packages and files, the next parameters can be specified instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_cpe Acknowledge#resource_cpe}
  */
  readonly resourceCpe?: string;
  /**
  * The format of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_format Acknowledge#resource_format}
  */
  readonly resourceFormat?: string;
  /**
  * When the resource_type is 'file', the hash of the file is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_hash Acknowledge#resource_hash}
  */
  readonly resourceHash?: string;
  /**
  * When the resource_type is 'package', the name of the package is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_name Acknowledge#resource_name}
  */
  readonly resourceName?: string;
  /**
  * The path of the resource. This is required for resources of type 'file' and 'executable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_path Acknowledge#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * The type of the resource where the issue was detected (either 'package', 'file' or 'executable')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_type Acknowledge#resource_type}
  */
  readonly resourceType: string;
  /**
  * When the resource_type is 'package', the version of the package is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#resource_version Acknowledge#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * Suppression rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#suppression_rule_id Acknowledge#suppression_rule_id}
  */
  readonly suppressionRuleId?: number;
  /**
  * Suppression rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#suppression_rule_name Acknowledge#suppression_rule_name}
  */
  readonly suppressionRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#suppression_rule_scopes Acknowledge#suppression_rule_scopes}
  */
  readonly suppressionRuleScopes?: string[];
}

export function acknowledgeIssuesToTerraform(struct?: AcknowledgeIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_repo_id: cdktf.numberToTerraform(struct!.ackRepoId),
    docker_id: cdktf.stringToTerraform(struct!.dockerId),
    expiration_days: cdktf.numberToTerraform(struct!.expirationDays),
    fix_version: cdktf.stringToTerraform(struct!.fixVersion),
    has_custom_severity: cdktf.booleanToTerraform(struct!.hasCustomSeverity),
    image: cdktf.stringToTerraform(struct!.image),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    issue_name: cdktf.stringToTerraform(struct!.issueName),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    os: cdktf.stringToTerraform(struct!.os),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
    registry: cdktf.stringToTerraform(struct!.registry),
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    repository: cdktf.stringToTerraform(struct!.repository),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    resource_cpe: cdktf.stringToTerraform(struct!.resourceCpe),
    resource_format: cdktf.stringToTerraform(struct!.resourceFormat),
    resource_hash: cdktf.stringToTerraform(struct!.resourceHash),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_path: cdktf.stringToTerraform(struct!.resourcePath),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    suppression_rule_id: cdktf.numberToTerraform(struct!.suppressionRuleId),
    suppression_rule_name: cdktf.stringToTerraform(struct!.suppressionRuleName),
    suppression_rule_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suppressionRuleScopes),
  }
}


export function acknowledgeIssuesToHclTerraform(struct?: AcknowledgeIssues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_repo_id: {
      value: cdktf.numberToHclTerraform(struct!.ackRepoId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_id: {
      value: cdktf.stringToHclTerraform(struct!.dockerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_version: {
      value: cdktf.stringToHclTerraform(struct!.fixVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_custom_severity: {
      value: cdktf.booleanToHclTerraform(struct!.hasCustomSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_name: {
      value: cdktf.stringToHclTerraform(struct!.issueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_cpe: {
      value: cdktf.stringToHclTerraform(struct!.resourceCpe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_format: {
      value: cdktf.stringToHclTerraform(struct!.resourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_hash: {
      value: cdktf.stringToHclTerraform(struct!.resourceHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_path: {
      value: cdktf.stringToHclTerraform(struct!.resourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppression_rule_id: {
      value: cdktf.numberToHclTerraform(struct!.suppressionRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suppression_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.suppressionRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppression_rule_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suppressionRuleScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcknowledgeIssuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcknowledgeIssues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackRepoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRepoId = this._ackRepoId;
    }
    if (this._dockerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerId = this._dockerId;
    }
    if (this._expirationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDays = this._expirationDays;
    }
    if (this._fixVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixVersion = this._fixVersion;
    }
    if (this._hasCustomSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasCustomSeverity = this._hasCustomSeverity;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._issueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueName = this._issueName;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._resourceCpe !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCpe = this._resourceCpe;
    }
    if (this._resourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFormat = this._resourceFormat;
    }
    if (this._resourceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHash = this._resourceHash;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePath = this._resourcePath;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._suppressionRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressionRuleId = this._suppressionRuleId;
    }
    if (this._suppressionRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressionRuleName = this._suppressionRuleName;
    }
    if (this._suppressionRuleScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressionRuleScopes = this._suppressionRuleScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcknowledgeIssues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ackRepoId = undefined;
      this._dockerId = undefined;
      this._expirationDays = undefined;
      this._fixVersion = undefined;
      this._hasCustomSeverity = undefined;
      this._image = undefined;
      this._imageName = undefined;
      this._issueName = undefined;
      this._issueType = undefined;
      this._os = undefined;
      this._osVersion = undefined;
      this._registry = undefined;
      this._registryName = undefined;
      this._repository = undefined;
      this._repositoryName = undefined;
      this._resourceCpe = undefined;
      this._resourceFormat = undefined;
      this._resourceHash = undefined;
      this._resourceName = undefined;
      this._resourcePath = undefined;
      this._resourceType = undefined;
      this._resourceVersion = undefined;
      this._suppressionRuleId = undefined;
      this._suppressionRuleName = undefined;
      this._suppressionRuleScopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ackRepoId = value.ackRepoId;
      this._dockerId = value.dockerId;
      this._expirationDays = value.expirationDays;
      this._fixVersion = value.fixVersion;
      this._hasCustomSeverity = value.hasCustomSeverity;
      this._image = value.image;
      this._imageName = value.imageName;
      this._issueName = value.issueName;
      this._issueType = value.issueType;
      this._os = value.os;
      this._osVersion = value.osVersion;
      this._registry = value.registry;
      this._registryName = value.registryName;
      this._repository = value.repository;
      this._repositoryName = value.repositoryName;
      this._resourceCpe = value.resourceCpe;
      this._resourceFormat = value.resourceFormat;
      this._resourceHash = value.resourceHash;
      this._resourceName = value.resourceName;
      this._resourcePath = value.resourcePath;
      this._resourceType = value.resourceType;
      this._resourceVersion = value.resourceVersion;
      this._suppressionRuleId = value.suppressionRuleId;
      this._suppressionRuleName = value.suppressionRuleName;
      this._suppressionRuleScopes = value.suppressionRuleScopes;
    }
  }

  // ack_repo_id - computed: false, optional: true, required: false
  private _ackRepoId?: number; 
  public get ackRepoId() {
    return this.getNumberAttribute('ack_repo_id');
  }
  public set ackRepoId(value: number) {
    this._ackRepoId = value;
  }
  public resetAckRepoId() {
    this._ackRepoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRepoIdInput() {
    return this._ackRepoId;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // docker_id - computed: false, optional: true, required: false
  private _dockerId?: string; 
  public get dockerId() {
    return this.getStringAttribute('docker_id');
  }
  public set dockerId(value: string) {
    this._dockerId = value;
  }
  public resetDockerId() {
    this._dockerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerIdInput() {
    return this._dockerId;
  }

  // expiration_configured_at - computed: true, optional: false, required: false
  public get expirationConfiguredAt() {
    return this.getStringAttribute('expiration_configured_at');
  }

  // expiration_configured_by - computed: true, optional: false, required: false
  public get expirationConfiguredBy() {
    return this.getStringAttribute('expiration_configured_by');
  }

  // expiration_days - computed: false, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // fix_version - computed: false, optional: true, required: false
  private _fixVersion?: string; 
  public get fixVersion() {
    return this.getStringAttribute('fix_version');
  }
  public set fixVersion(value: string) {
    this._fixVersion = value;
  }
  public resetFixVersion() {
    this._fixVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixVersionInput() {
    return this._fixVersion;
  }

  // has_custom_severity - computed: false, optional: true, required: false
  private _hasCustomSeverity?: boolean | cdktf.IResolvable; 
  public get hasCustomSeverity() {
    return this.getBooleanAttribute('has_custom_severity');
  }
  public set hasCustomSeverity(value: boolean | cdktf.IResolvable) {
    this._hasCustomSeverity = value;
  }
  public resetHasCustomSeverity() {
    this._hasCustomSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasCustomSeverityInput() {
    return this._hasCustomSeverity;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // issue_name - computed: false, optional: false, required: true
  private _issueName?: string; 
  public get issueName() {
    return this.getStringAttribute('issue_name');
  }
  public set issueName(value: string) {
    this._issueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueNameInput() {
    return this._issueName;
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_name - computed: false, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // resource_cpe - computed: false, optional: true, required: false
  private _resourceCpe?: string; 
  public get resourceCpe() {
    return this.getStringAttribute('resource_cpe');
  }
  public set resourceCpe(value: string) {
    this._resourceCpe = value;
  }
  public resetResourceCpe() {
    this._resourceCpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCpeInput() {
    return this._resourceCpe;
  }

  // resource_format - computed: false, optional: true, required: false
  private _resourceFormat?: string; 
  public get resourceFormat() {
    return this.getStringAttribute('resource_format');
  }
  public set resourceFormat(value: string) {
    this._resourceFormat = value;
  }
  public resetResourceFormat() {
    this._resourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFormatInput() {
    return this._resourceFormat;
  }

  // resource_hash - computed: false, optional: true, required: false
  private _resourceHash?: string; 
  public get resourceHash() {
    return this.getStringAttribute('resource_hash');
  }
  public set resourceHash(value: string) {
    this._resourceHash = value;
  }
  public resetResourceHash() {
    this._resourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHashInput() {
    return this._resourceHash;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string; 
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }
  public set resourcePath(value: string) {
    this._resourcePath = value;
  }
  public resetResourcePath() {
    this._resourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePathInput() {
    return this._resourcePath;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // suppression_rule_id - computed: false, optional: true, required: false
  private _suppressionRuleId?: number; 
  public get suppressionRuleId() {
    return this.getNumberAttribute('suppression_rule_id');
  }
  public set suppressionRuleId(value: number) {
    this._suppressionRuleId = value;
  }
  public resetSuppressionRuleId() {
    this._suppressionRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionRuleIdInput() {
    return this._suppressionRuleId;
  }

  // suppression_rule_name - computed: false, optional: true, required: false
  private _suppressionRuleName?: string; 
  public get suppressionRuleName() {
    return this.getStringAttribute('suppression_rule_name');
  }
  public set suppressionRuleName(value: string) {
    this._suppressionRuleName = value;
  }
  public resetSuppressionRuleName() {
    this._suppressionRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionRuleNameInput() {
    return this._suppressionRuleName;
  }

  // suppression_rule_scopes - computed: false, optional: true, required: false
  private _suppressionRuleScopes?: string[]; 
  public get suppressionRuleScopes() {
    return this.getListAttribute('suppression_rule_scopes');
  }
  public set suppressionRuleScopes(value: string[]) {
    this._suppressionRuleScopes = value;
  }
  public resetSuppressionRuleScopes() {
    this._suppressionRuleScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionRuleScopesInput() {
    return this._suppressionRuleScopes;
  }
}

export class AcknowledgeIssuesList extends cdktf.ComplexList {
  public internalValue? : AcknowledgeIssues[] | cdktf.IResolvable

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
  public get(index: number): AcknowledgeIssuesOutputReference {
    return new AcknowledgeIssuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge aquasec_acknowledge}
*/
export class Acknowledge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_acknowledge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acknowledge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acknowledge to import
  * @param importFromId The id of the existing Acknowledge that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acknowledge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_acknowledge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/acknowledge aquasec_acknowledge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcknowledgeConfig
  */
  public constructor(scope: Construct, id: string, config: AcknowledgeConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_acknowledge',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._id = config.id;
    this._issues.internalValue = config.issues;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // issues - computed: false, optional: false, required: true
  private _issues = new AcknowledgeIssuesList(this, "issues", true);
  public get issues() {
    return this._issues;
  }
  public putIssues(value: AcknowledgeIssues[] | cdktf.IResolvable) {
    this._issues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesInput() {
    return this._issues.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      issues: cdktf.listMapper(acknowledgeIssuesToTerraform, true)(this._issues.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      issues: {
        value: cdktf.listMapperHcl(acknowledgeIssuesToHclTerraform, true)(this._issues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AcknowledgeIssuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
