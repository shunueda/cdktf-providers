// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagToLabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sets of keys of AWS resource tags to map to CloudSecure labels with the same keys. The values of the created labels correspond to the values of the tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#aws_tag_keys TagToLabel#aws_tag_keys}
  */
  readonly awsTagKeys: string[];
  /**
  * Set of keys of Azure resource tags to map to CloudSecure labels with the same keys. The values of the created labels correspond to the values of the tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#azure_tag_keys TagToLabel#azure_tag_keys}
  */
  readonly azureTagKeys: string[];
  /**
  * Icon of the created CloudSecure labels. The supported icon names are: 
  *  > ``` access, across-enf-boundary-rtl, across-enf-boundary, ad-certificate, ad-federation, ad-lightweight-directory, ad-rights-management, ad, add-diff-classic, add-diff, add-user, add, adfs, admin, ai-star-no-fill, ai-star, all-workloads, allowlist, amazon-cognito, any, app-group-map, app, appgroup, application-definition-banner-modal, application-definition, application, arrow-curve-left-down, arrow-curve-left-up, arrow-curve-left, arrow-curve-right-down, arrow-curve-right-up, arrow-down-bold, arrow-down-bolder, arrow-down, arrow-left-long, arrow-left-to-bracket, arrow-left, arrow-right-long, arrow-right, arrow-switch-horizontal, arrow-switch-vertical, arrow-up-bold, arrow-up-bolder, arrow-up-down-switch, arrow-up, audit, auth0, aws-white, aws, azure, back-classic, back, bi-directional, bolt-filled, bookmark, brush-activate, brush-clear, brush-pause, calendar, cancel, cannot-write-rules, capslock, chart-curvy, chart-straight, check-classic, check-filled, check, chevron-double-left, chevron-double-right, circle-stop, clear, clipboard-list, close-classic, close, cloud-custom, cloud-workload, cloud, collapse-all, collapse-role, column, comment-classic, comment, container-workload, copy-new, copy, corporate, critical, customize-axis, dashboard-classic, dashboard, database, decrease, delete, deny, denylist, deployment, destination, disabled-none, disabled-status-classic, disabled-status, disabled, discover-rule-banner-modal, discovery-rule, document, down-classic, down, download-lightning, download, duplicate, edit-classic, edit-underline, edit, email, enabled, endpoint, enf-boundary-rtl, enf-boundary, enforce, enforced, env-classic, env, error-boundary, error-classic, error-filled, error, expand-role, expand, explore, export, external-link-classic, external-link, file-copy, file, filter-advanced, filter-widget, filter, flip-horizontal, flip-vertical, folder-filled, folder, gcp, global-map, global-rule, google-cloud, google-identity-platform, grab-handle-classic, grab-handle, graph-icon, grid, group, health, help-classic, help-menu, help, home-filled, how-to-read, howToRead-enforcement, howToRead-vulnerability, id, idle, illuminate, illumination, illumio-glyph, illumio-logo, illumio_glyph, impact, import, increase, info-classic, info-filled, info, infrastructure, inspect, internet, inuse-classic, inuse-full, inuse, ip-lists, jira, key, kubernetes-workload, layout-reset, layout, ldap, left, legend, lightbulb-outline, lightning-filter, link-new, link, list, loading, loc-outline, loc, local, lock-rounded, lock, machine-auth, manage, managed-tenants, map-ai-indicator, map-link-down, map-link-left, map-link, map-no-border, map, member-hide, member-show, menu, mesh, mode, more-grid, more-horizontal, more, move-tool, ms-entra-id, navigateup, network, next-classic, next, node-size, non-corporate, oci, oidc, okta, oneLogin, online, org, overflow, pair, parallel-icon, pause, pce-health, pen-ruler, pending, pin, pingIdentity, play-outline, play, policy, policyobj, pop-in-classic, pop-in, pop-out-classic, pop-out, potentially-blocked, private-address, progress-partial, progress, provision-classic, provision, refresh-classic, refresh-clock, refresh, remote-desktop, remove-diff-classic, remove-diff, remove-square, remove, reset, resize-handle, revert, right-classic, right, risk, role, run, saml, save, scope, search-alt, search-classic, search, secure-connect, selected, selection-tool, send, server, servers-endpoints, servers, service-category-placeholder, service-category, service-role-placeholder, service-role, service, settings-classic, settings, slack, sort-down, sort-up, sort, source, staged, star-outline, star, stars, starter-page-graphic, stop, stopped, suspended, syncing, t2l, table-list-close, table-list-open, table, third-party, thumbs-down-hollow, thumbs-down, thumbs-up-hollow, thumbs-up, time-count, time, traffic, troubleshoot, unlink, unlock, unlocked, unmanaged, unpair, up-classic, up, upload, usage, user-add-new, user, userprof, ven, version, video, virtual-server, virtual-service, warning-classic, warning-filled, warning, workload, zoom-in, zoom-out, zoom-to-fit-classic, zoom-to-fit ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#icon TagToLabel#icon}
  */
  readonly icon: TagToLabelIcon;
  /**
  * Key of the created CloudSecure labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#key TagToLabel#key}
  */
  readonly key: string;
  /**
  * Display name of the created CloudSecure labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#name TagToLabel#name}
  */
  readonly name: string;
}
export interface TagToLabelIcon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#background_color TagToLabel#background_color}
  */
  readonly backgroundColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#foreground_color TagToLabel#foreground_color}
  */
  readonly foregroundColor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#name TagToLabel#name}
  */
  readonly name: string;
}

export function tagToLabelIconToTerraform(struct?: TagToLabelIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    foreground_color: cdktf.stringToTerraform(struct!.foregroundColor),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function tagToLabelIconToHclTerraform(struct?: TagToLabelIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground_color: {
      value: cdktf.stringToHclTerraform(struct!.foregroundColor),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagToLabelIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagToLabelIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._foregroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.foregroundColor = this._foregroundColor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagToLabelIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._foregroundColor = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._foregroundColor = value.foregroundColor;
      this._name = value.name;
    }
  }

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // foreground_color - computed: false, optional: false, required: true
  private _foregroundColor?: string; 
  public get foregroundColor() {
    return this.getStringAttribute('foreground_color');
  }
  public set foregroundColor(value: string) {
    this._foregroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundColorInput() {
    return this._foregroundColor;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label illumio-cloudsecure_tag_to_label}
*/
export class TagToLabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_tag_to_label";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagToLabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagToLabel to import
  * @param importFromId The id of the existing TagToLabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagToLabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_tag_to_label", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/tag_to_label illumio-cloudsecure_tag_to_label} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagToLabelConfig
  */
  public constructor(scope: Construct, id: string, config: TagToLabelConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_tag_to_label',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsTagKeys = config.awsTagKeys;
    this._azureTagKeys = config.azureTagKeys;
    this._icon.internalValue = config.icon;
    this._key = config.key;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_tag_keys - computed: false, optional: false, required: true
  private _awsTagKeys?: string[]; 
  public get awsTagKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('aws_tag_keys'));
  }
  public set awsTagKeys(value: string[]) {
    this._awsTagKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagKeysInput() {
    return this._awsTagKeys;
  }

  // azure_tag_keys - computed: false, optional: false, required: true
  private _azureTagKeys?: string[]; 
  public get azureTagKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('azure_tag_keys'));
  }
  public set azureTagKeys(value: string[]) {
    this._azureTagKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTagKeysInput() {
    return this._azureTagKeys;
  }

  // icon - computed: false, optional: false, required: true
  private _icon = new TagToLabelIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: TagToLabelIcon) {
    this._icon.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsTagKeys),
      azure_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureTagKeys),
      icon: tagToLabelIconToTerraform(this._icon.internalValue),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsTagKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_tag_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureTagKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      icon: {
        value: tagToLabelIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TagToLabelIcon",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
